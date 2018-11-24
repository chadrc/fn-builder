import makeFnProxy, {InternalsKey} from "./makeFnProxyHandler";
import {Fn, FnContext, FnContextOptions} from "./types";
import {DynamicFn} from "./DynamicFn";

const defaultContextOptions: FnContextOptions = {
    useArgValuesInName: false,
    caching: false,
};

export const make = <T extends DynamicFn = DynamicFn> (
    options?: FnContextOptions,
): Fn<T> => {
    let finalOptions =  Object.assign({}, defaultContextOptions, options || {});
    return makeFnProxy(new DynamicFn(), finalOptions) as Fn<T>;
};

export const from = <T extends object = DynamicFn>(
    obj: T,
    options?: FnContextOptions,
): Fn<T> => {
    let contextObject: T | DynamicFn = obj;
    let contextOptions = options;

    if (!contextObject) {
        contextObject = new DynamicFn();
    }

    let finalOptions =  Object.assign({}, defaultContextOptions, contextOptions || {});
    return makeFnProxy(contextObject as T, finalOptions);
};

export const nameOf = (fn: Fn<any>) => {
    const context = (fn as any)[InternalsKey] as FnContext<any>;
    return context.name;
};

export const addDynamic = (name: string, func: (...args: any[]) => any) => {
    Object.defineProperty(DynamicFn.prototype, name, {
        value: func
    });
};
