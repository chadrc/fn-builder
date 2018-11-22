import makeFnProxy, {InternalsKey} from "./makeFnProxyHandler";
import {Fn, FnContext} from "./types";

export const make = <T extends object>(obj: T): Fn<T> => {
    return makeFnProxy(obj);
};

export const nameOf = (fn: Fn<any>) => {
    const context = (fn as any)[InternalsKey] as FnContext<any>;
    return context.name;
};
