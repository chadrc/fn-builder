import makeFnProxy, {InternalsKey} from "./makeFnProxyHandler";
import {Fn, FnContext, FnContextOptions} from "./types";
import {DynamicFn} from "./DynamicFn";

const defaultContextOptions: FnContextOptions = {
    useArgValuesInName: false,
    caching: false,
};

export const make = <T extends object = DynamicFn>(
    obj?: T,
    options?: FnContextOptions
): Fn<T> => {
    let contextObject: T | DynamicFn = obj;
    if (!contextObject) {
        contextObject = new DynamicFn();
    }
    let finalOptions =  Object.assign(defaultContextOptions, options || {});
    return makeFnProxy(contextObject as T, finalOptions);
};

export const nameOf = (fn: Fn<any>) => {
    const context = (fn as any)[InternalsKey] as FnContext<any>;
    return context.name;
};
