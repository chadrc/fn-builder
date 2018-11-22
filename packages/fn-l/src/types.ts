export type GenericFunction<T> = (...arg: any) => any

export type FnPropertyFunction<T, F> = F extends (...arg: infer U) => any ?
    ReturnType<F> extends (...arg: any[]) => any ?
        (...args: U) => ReturnType<F> & Fn<T> & GenericFunction<T> : (...args: any[]) => GenericFunction<T>
    : F;

export type Fn<T> = {
    [P in keyof T]: Fn<T> & FnPropertyFunction<T, T[P]>;
}

export interface FnContextWrapper<T> {
    context: FnContext<T>
}

export class FnContext<T> {
    private readonly _contextObject: T;
    private readonly _parent?: FnContext<T>;
    private readonly _key?: keyof T;

    private _func: GenericFunction<T>;

    constructor(
        obj: T,
        parent: FnContext<T> = null,
        key: keyof T = null
    ) {
        this._contextObject = obj;
        this._parent = parent;
        this._key = key;
        this._func = obj[key] as unknown as GenericFunction<T>;
    }

    get contextObject() {
        return this._contextObject;
    }

    get parent(): FnContext<T> {
        return this._parent;
    }

    get func(): GenericFunction<T> {
        return this._func;
    }

    set paramValue(v: any[]) {
        this._func = this._func(...v);
    }
}