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
    private readonly _contextCache?: { [key: string]: GenericFunction[] };
    private readonly _root: FnContext<T>;
    private readonly _args: any[];
    private readonly _closestKeyedAncestor: FnContext<T>;
    private readonly _func: GenericFunction;
    private readonly _rawFunc: GenericFunction;

    constructor(
        obj: T,
        parent: FnContext<T> = null,
        key: keyof T = null,
        args: any[] = [],
    ) {
        this._contextObject = obj;
        this._parent = parent;
        this._key = key;
        this._args = args;

        // if parent is null, then this is the root context
        // root context maintains the function cache
        if (!this._parent) {
            this._contextCache = {};
            this._root = this;
        } else {
            // Maintain reference to root
            this._root = this._parent._root;

            // Only child contexts have functions
            this._closestKeyedAncestor = null;

            if (this._parent !== this._root) {
                // get closest ancestor that has a key
                if (this._parent._key === null) {
                    // if parent doesn't have a key then we use the same ancestor that our parent has
                    this._closestKeyedAncestor = this._parent._closestKeyedAncestor;
                } else {
                    // use parent
                    this._closestKeyedAncestor = this._parent;
                }
            }

            if (this._key === null) {
                // This context is being created by a function call
                // not by property access

                // get raw function parent function
                this._rawFunc = this._parent._rawFunc;

                // create new function by invoking parent function with given args
                this._rawFunc = this._rawFunc(...this._args);

                // Compose this function with closest keyed ancestor's parent
                let closestKeyedAncestorParent = this._closestKeyedAncestor._parent;
                if (closestKeyedAncestorParent !== this._root) {
                    this._func = (...input) => this._rawFunc(closestKeyedAncestorParent._func(...input));
                } else {
                    // is starting context
                    // use raw function
                    this._func = this._rawFunc;
                }
            } else {
                // This context is being created by direct access to context object with key

                // get function from context object with key
                this._rawFunc = this._contextObject[this._key] as unknown as GenericFunction;

                if (this._parent === this._root) {
                    // is starting context
                    // use raw function
                    this._func = this._rawFunc;
                } else {
                    // compose it directly with its parent function
                    this._func = (...input) => this._rawFunc(this._parent._func(...input));
                }
            }
        }
    }

    get name(): string {
        let name;

        let key = this._key;

        let argSets = [this._args];

        if (key === null) {
            key = this._closestKeyedAncestor._key;

            // get remaining args
            let next = this._parent;
            while (next !== this._closestKeyedAncestor && next !== this._root) {
                argSets.push(next._args);
                next = next._parent;
            }
        }

        let argStr = argSets
            .reverse() // because we started at end
            .map(set =>
                `(${set.map(arg => typeof arg).join(",")})`
            );

        name = `${key.toString()}${argStr.join("")}`;

        return name;
    }

    get contextObject() {
        return this._contextObject;
    }

    get func(): GenericFunction {
        return this._func;
    }
}