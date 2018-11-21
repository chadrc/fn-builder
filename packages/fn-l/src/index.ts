import makeFnProxy from "./makeFnProxyHandler";
import {Fn} from "./types";

export const make = <T extends object>(obj: T): Fn<T> => {
    return makeFnProxy(obj);
};
