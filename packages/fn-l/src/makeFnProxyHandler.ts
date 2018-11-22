import {Fn, FnContext, FnContextWrapper, GenericFunction} from "./types";

const makeFnProxyHandler = <T extends object>(): ProxyHandler<FnContextWrapper<T>> => {
    return {
        set: () => {throw new Error("Cannot set values on Fn object.")},
        deleteProperty: () => {throw new Error("Cannot delete values on Fn object.")},
        get: function (thisArg: FnContextWrapper<T>, prop: keyof T) {
            // If requested prop is on the underlying object
            // Proxy it for function composition
            if (!!(thisArg.context.contextObject[prop])) {
                return makeFnProxy(
                    thisArg.context.contextObject,
                    thisArg.context,
                    prop,
                    null
                );
            }
        },
        apply: function (target: FnContextWrapper<T>, thisArg: any, argumentsList: any) {
            // Quick check to see if this context returns another function
            // try {
            //     // Wrap in try-catch cause we don't now what function does
            //     let r = target.context.func({});
            //
            //     // If this function returns a function
            //     // consider this call a composition call
            //     // instead of a call to retrieve this chains result
            //     if (typeof r === "function") {
            //         return makeFnProxy(
            //             thisArg.context.contextObject,
            //             thisArg.context,
            //             null,
            //             argumentsList
            //         );
            //     }
            // } catch (e) {
            //     // Do nothing, since we don't know how the function works
            //     // the parameter we passed may have caused the error
            // }

            // let contexts = [];
            //
            // // This is the last context in the chain
            // let lastContext = target.context;
            //
            // // Make array of contexts all the way up to parent
            // while (lastContext.parent !== null) {
            //     contexts.push(lastContext);
            //     lastContext = lastContext.parent;
            // }
            //
            // // Reverse method chain for proper order
            // contexts = contexts.reverse();
            //
            // // Need to spread argumentList for first call
            // // Can't just check in below loop in case a function acutally returns an array
            //
            // // get first context
            // const first = contexts.shift();

            // call first's function spreading argumentList to get starting result
            //
            // // Loop through remaining context calling their functions
            // // and passing its result to the next function
            // for (const c of contexts) {
            //     let method: GenericFunction = c.func;
            //     result = method(result);
            // }

            let result = target.context.func(...argumentsList);
            // if this function returned another function
            // wrap in proxy so it can be composed more
            if (typeof result === "function") {
                return makeFnProxy(
                    target.context.contextObject,
                    target.context,
                    null,
                    argumentsList
                );
            }
            return result;
        }
    }
};

const makeFnProxyObject = <T extends object>(target: FnContextWrapper<T>): Fn<T> => {
    return new Proxy(target, makeFnProxyHandler()) as unknown as Fn<T>;
};

const makeFnContext = <T>(
    obj: T,
    parent: FnContext<T> = null,
    key: keyof T = null,
    args: any[] = null,
): FnContextWrapper<T> => {
    const func = () => {
    };
    func.context = new FnContext<T>(obj, parent, key, args);
    return func;
};

const makeFnProxy = <T extends object>(
    obj: T,
    root: FnContext<T> = null,
    key: keyof T = null,
    args: any[],
): Fn<T> => {
    return makeFnProxyObject(makeFnContext(obj, root, key, args));
};

export default makeFnProxy;