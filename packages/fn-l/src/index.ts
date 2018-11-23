import makeFnProxy, {InternalsKey} from "./makeFnProxyHandler";
import {Fn, FnContext, FnContextOptions} from "./types";

const defaultContextOptions: FnContextOptions = {
    useArgValuesInName: false
};

export const make = <T extends object>(obj: T, options?: FnContextOptions): Fn<T> => {
    return makeFnProxy(obj, options || defaultContextOptions);
};

export const nameOf = (fn: Fn<any>) => {
    const context = (fn as any)[InternalsKey] as FnContext<any>;
    return context.name;
};
