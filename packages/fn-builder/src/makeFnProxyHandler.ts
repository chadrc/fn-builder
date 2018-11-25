import {FnBuilder, FnContext, FnContextOptions, FnContextWrapper} from "./types";

export const InternalsKey = "__FnInternals__";

const FnPropertyKey = "fn";

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

            if (prop === FnPropertyKey) {
                return FnContext.build(thisArg.context);
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
            return makeFnProxy(
                target.context,
                null,
                argumentsList
            );
        }
    }
};

const makeFnProxy = <T extends object>(
    root: FnContext<T> = null,
    key: keyof T = null,
    args: any[] = [],
): FnBuilder<T> => {
    return FnContext.makeFnProxyObject(root, key, args);
};

const initFnProxy = <T extends object>(
    obj: T,
    options: FnContextOptions,
): FnBuilder<T> => {
    return FnContext.makeFnRoot(obj, options);
};

export default initFnProxy;