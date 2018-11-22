import {Fn, FnContext, FnContextWrapper} from "./types";

export const InternalsKey = "__FnInternals__";

const makeFnProxyHandler = <T extends object>(): ProxyHandler<FnContextWrapper<T>> => {
    return {
        set: () => {throw new Error("Cannot set values on Fn object.")},
        deleteProperty: () => {throw new Error("Cannot delete values on Fn object.")},
        get: function (thisArg: FnContextWrapper<T>, prop: keyof T) {
            if (prop === InternalsKey) {
                return thisArg.context;
            }
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
    const func = () => {};
    func.context = new FnContext<T>(obj, parent, key, args);
    return func;
};

const makeFnProxy = <T extends object>(
    obj: T,
    root: FnContext<T> = null,
    key: keyof T = null,
    args: any[] = [],
): Fn<T> => {
    return makeFnProxyObject(makeFnContext(obj, root, key, args));
};

export default makeFnProxy;