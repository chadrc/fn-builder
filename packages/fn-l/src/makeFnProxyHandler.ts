import {Fn, FnContext, FnContextWrapper, GenericFunction} from "./types";

const makeFnProxyHandler = <T extends object>(): ProxyHandler<FnContextWrapper<T>> => {
    return {
        get: function (thisArg: FnContextWrapper<T>, prop: keyof T) {
            // If requested prop is on the underlying object
            // Proxy it for function composition
            if (!!(thisArg.context.contextObject[prop])) {
                return makeFnProxy(
                    thisArg.context.contextObject,
                    thisArg.context,
                    prop
                );
            }
        },
        apply: function (target: FnContextWrapper<T>, thisArg: any, argumentsList: any) {
            // Quick check to see if this context returns another function
            try {
                // Wrap in try-catch cause we don't now what function does
                let r = target.context.func({});

                // If this function returns a function
                // consider this call a composition call
                // instead of a call to retrieve this chains result
                if (typeof r === "function") {
                    target.context.paramValue = argumentsList[0];
                    return makeFnProxyObject(target);
                }
            } catch (e) {
                // Do nothing, since we don't know how the function works
                // the parameter we passed may have caused the error
            }

            let contexts = [];

            // This is the last context in the chain
            let lastContext = target.context;

            // Make array of contexts all the way up to parent
            while (lastContext.parent !== null) {
                contexts.push(lastContext);
                lastContext = lastContext.parent;
            }

            // Reverse method chain for proper order
            contexts = contexts.reverse();

            // start with given argument
            let result = argumentsList[0];

            // Loop through methods passing the result of the previous to the next
            for (const c of contexts) {
                let method: GenericFunction = c.func;
                result = method(result);
            }

            if (typeof result === "function") {
                target.context.paramValue = argumentsList[0];
                return makeFnProxyObject(target);
            }
            return result;
        }
    }
};

const makeFnProxyObject = <T extends object> (target: FnContextWrapper<T>): Fn<T> => {
    return new Proxy(target, makeFnProxyHandler()) as unknown as Fn<T>;
};

const makeFnContext = <T>(
    obj: T,
    parent: FnContext<T> = null,
    key: keyof T = null
): FnContextWrapper<T> => {
    const func = () => {
    };
    func.context = new FnContext<T>(obj, parent, key);
    return func;
};

const makeFnProxy = <T extends object>(obj: T, root: FnContext<T> = null, key: keyof T = null): Fn<T> => {
    return makeFnProxyObject(makeFnContext(obj, root, key));
};

export default makeFnProxy;