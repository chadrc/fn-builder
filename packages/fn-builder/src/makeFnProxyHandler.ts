import {Fn, FnContext, FnContextOptions, FnContextWrapper} from "./types";

export const InternalsKey = "__FnInternals__";

const passThroughProps = [
    "valueOf",
];

export const makeFnProxyHandler = <T extends object>(): ProxyHandler<FnContextWrapper<T>> => {
    return {
        set: () => {throw new Error("Cannot set values on Fn object.")},
        deleteProperty: () => {throw new Error("Cannot delete values on Fn object.")},
        get: function (thisArg: FnContextWrapper<T>, prop: keyof T) {
            if (prop === InternalsKey) {
                return thisArg.context;
            }

            // Pass through properties
            if (passThroughProps.indexOf(prop as string) !== -1) {
                return (thisArg as any)[prop];
            }

            // If requested prop is on the underlying object
            // Proxy it for function composition
            if (!!(thisArg.context.contextObject[prop])) {
                return makeFnProxy(
                    thisArg.context,
                    prop,
                    null
                );
            }
        },
        apply: function (target: FnContextWrapper<T>, thisArg: any, argumentsList: any) {
            let result;

            try {
                result = target.context.func(...argumentsList);
            } catch (e) {
                // TODO: try switching logic here, do compose first with chance of failure else return normal value
                // chance that calling the function will be with incorrect args
                // so we try to compose with the arguments instead
                // if that fails, then something else is wrong
                return makeFnProxy(
                    target.context,
                    null,
                    argumentsList
                );
            }

            // if this function returned another function
            // wrap in proxy so it can be composed more
            if (typeof result === "function") {
                return makeFnProxy(
                    target.context,
                    null,
                    argumentsList
                );
            }
            return result;
        }
    }
};

const makeFnProxy = <T extends object>(
    root: FnContext<T> = null,
    key: keyof T = null,
    args: any[] = [],
): Fn<T> => {
    return FnContext.makeFnProxyObject(root, key, args);
};

const initFnProxy = <T extends object>(
    obj: T,
    options: FnContextOptions,
): Fn<T> => {
    return FnContext.makeFnRoot(obj, options);
};

export default initFnProxy;