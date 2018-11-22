export type GenericFunction = (...arg: any) => any

export type FnPropertyFunction<T, F> = F extends (...arg: infer U) => any ?
    ReturnType<F> extends (...arg: any[]) => any ?
        (...args: U) => Fn<T> & FnPropertyFunction<T, ReturnType<F>>// & GenericFunction<T>
        : (...args: any[]) => GenericFunction
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
    private readonly _contextCache?: {[key: string]: GenericFunction[]};
    private readonly _root: FnContext<T>;
    private readonly _args: any[];
    private readonly _closestKeyedAncestor: FnContext<T>;

    private readonly _func: GenericFunction;
    private readonly _rawFunc: GenericFunction;

    constructor(
        obj: T,
        parent: FnContext<T> = null,
        key: keyof T = null,
        args: any[] = null,
    ) {
        this._contextObject = obj;
        this._parent = parent;

        // if parent is null, then this is the root context
        // root context maintains the function cache
        if (!parent) {
            this._contextCache = {};
            this._root = this;
        } else {
            this._root = parent.root;
            // Only child contexts have functions

            // this._closestKeyedAncestor = this.closestKeyedAncestor;

            if (key === null) {
                // This context is being created by a function call
                // not by property access

                // get function parent function
                this._rawFunc = this._parent._rawFunc;
            } else {
                // get function from context object with key
                this._key = key;
                this._rawFunc = obj[key] as unknown as GenericFunction;
            }

            // invoke our function if we were given arguments
            if (args && args.length > 0) {
                this._args = args;
                this._rawFunc = this._rawFunc(...args);

                // Need to now compose this function with closest keyed ancestor's parent
                let closestKeyedAncestor = this.closestKeyedAncestor._parent;
                if (closestKeyedAncestor !== this._root) {
                    this._func = (...input) => this._rawFunc(closestKeyedAncestor._func(...input));
                } else {
                    this._func = this._rawFunc;
                }
            } else if (this._parent !== this._root) {
                // unkeyed children already get comped with their keyed ancestor
                // but now we need to comp with next keyed ancestor
                // or the result of the next keyed ancestor and its unkeyed children
                // this will be the parent of our closest keyed ancestor

                this._func = (...input) => this._rawFunc(this._parent._func(...input));
            } else {
                // is starting function
                // use raw func
                this._func = this._rawFunc;
            }
        }
    }

    get root() {
        return this._root;
    }

    get contextObject() {
        return this._contextObject;
    }

    get parent(): FnContext<T> {
        return this._parent;
    }

    get func(): GenericFunction {
        return this._func;
    }

    private get closestKeyedAncestor() {
        // if this is root
        // or parent is root
        // there is no keyed ancestor
        if (this.parent === null
            || this._parent === this._root) {
            return null;
        }

        // get closest ancestor that has a key
        if (this._parent._key === null) {
            // if parent doesn't have a key then we use the same ancestor that our parent has
            return this._parent._closestKeyedAncestor;
        } else {
            // use parent
            return this._parent;
        }
    }
}