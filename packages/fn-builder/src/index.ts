import makeFnProxy, {InternalsKey} from "./makeFnProxyHandler";
import {FnBuilder, FnContext, FnContextOptions, FnProperty} from "./types";
import {DynamicFn} from "./DynamicFn";

const defaultContextOptions: FnContextOptions = {
    useArgValuesInName: false,
    caching: false,
};

export {FnBuilder} from "./types";

export const make = <T extends DynamicFn = DynamicFn> (
    options?: FnContextOptions,
): FnBuilder<T> => {
    let finalOptions =  Object.assign({}, defaultContextOptions, options || {});
    return makeFnProxy(new DynamicFn(), finalOptions) as FnBuilder<T>;
};

export const from = <T extends object = DynamicFn>(
    obj: T,
    options?: FnContextOptions,
): FnBuilder<T> => {
    let contextObject: T | DynamicFn = obj;
    let contextOptions = options;

    if (!contextObject) {
        contextObject = new DynamicFn();
    }

    let finalOptions =  Object.assign({}, defaultContextOptions, contextOptions || {});
    return makeFnProxy(contextObject as T, finalOptions);
};

export const nameOf = (fn: FnBuilder<any> | FnProperty<any, any>) => {
    const context = (fn as any)[InternalsKey] as FnContext<any>;
    return context.name;
};

export const addDynamic = (name: string, func: (...args: any[]) => any) => {
    Object.defineProperty(DynamicFn.prototype, name, {
        value: func
    });
};
