import {makeFnProxyHandler} from "./makeFnProxyHandler";

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
    private readonly _contextCache?: { [key: string]: Fn<T> };
    private readonly _root: FnContext<T>;
    private readonly _args: any[];
    private readonly _keyedRoot: FnContext<T>;
    private readonly _func: GenericFunction;
    private readonly _rawFunc: GenericFunction;
    private readonly _name: string;

    static makeFnProxyObject = <T extends object>(
        obj: T,
        parentContext: FnContext<T> = null,
        key: keyof T = null,
        args: any[] = [],
    ): Fn<T> => {
        if (parentContext === null) {
            // make a root context
            const func = (() => {}) as unknown as FnContextWrapper<T>;
            func.context = new FnContext<T>(
                obj,
                parentContext,
                key,
                args
            );

            // Root context doesn't get cached
            // just create and return it
            return new Proxy(func, makeFnProxyHandler()) as unknown as Fn<T>;
        }

        // Check root context's cache for existing object
        const root = parentContext._root;
        const cacheKey = FnContext.compileCacheKeyForContext<T>(
            root,
            parentContext,
            key,
            args,
        );

        if (root._contextCache[cacheKey]) {
            return root._contextCache[cacheKey];
        } else {
            const func = (() => {}) as unknown as FnContextWrapper<T>;
            func.context = new FnContext<T>(
                root.contextObject,
                parentContext,
                key,
                args
            );

            const fn = new Proxy(func, makeFnProxyHandler()) as unknown as Fn<T>;
            root._contextCache[cacheKey] = fn;
            return fn;
        }
    };

    private static compileCacheKeyForContext<T>(
        rootContext: FnContext<T>,
        parentContext: FnContext<T>,
        key: keyof T = null,
        args: any[] = []
    ) {
        let name;

        // let key = this._key;

        let argSets = [];
        if (args && args.length > 0) {
            argSets.push(args);
        }

        if (key === null && parentContext._keyedRoot) {
            key = parentContext._keyedRoot._key;

            // get remaining args
            let next = parentContext;
            while (next !== parentContext._keyedRoot && next !== rootContext) {
                if (next._args) {
                    argSets.push(next._args);
                }
                next = next._parent;
            }
        }

        let argStr = argSets
            .reverse() // because we started at end
            .map(set =>
                `(${set.map(arg => `${arg}`).join(",")})`
            );

        name = `${key.toString()}${argStr.join("")}`;

        if (parentContext._keyedRoot) {
            // start past already used contexts
            const wrappedContext = parentContext._keyedRoot._parent;

            if (wrappedContext !== rootContext) {
                name = `${name}(${wrappedContext.name})`;
            }
        }

        return name;
    }

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

        // Need some info for naming
        // and need name for caching

        // if parent is null, then this is the root context
        if (!this._parent) {
            this._root = this;
            this._contextCache = {};
        } else {
            this._root = this._parent._root;

            if (this._key == null) {
                this._keyedRoot = this._parent._keyedRoot;
            } else {
                this._keyedRoot = this;
            }

            // root doesn't need a name
            this._name = this.compileName();

            let compiledFunctions = this.compileFunctions();

            this._func = compiledFunctions.func;
            this._rawFunc = compiledFunctions.rawFunc;
        }
    }

    get name() {
        return this._name;
    }

    get contextObject() {
        return this._contextObject;
    }

    get func(): GenericFunction {
        return this._func;
    }

    private compileName(): string {
        let name;

        let key = this._key;

        let argSets = [];

        if (key === null) {
            key = this._keyedRoot._key;

            // get remaining args
            let next = this as FnContext<T>;
            while (next !== this._keyedRoot && next !== this._root) {
                if (next._args) {
                    argSets.push(next._args);
                }
                next = next._parent;
            }
        }

        let argStr = argSets
            .reverse() // because we started at end
            .map(set =>
                `(${set.map(arg => typeof arg).join(",")})`
            );

        name = `${key.toString()}${argStr.join("")}`;

        // start past already used contexts
        const wrappedContext = this._keyedRoot._parent;

        if (wrappedContext !== this._root) {
            name = `${name}(${wrappedContext.name})`;
        }

        if (this._keyedRoot._parent === this._root) {
            name += "(__input__)";
        }

        return name;
    }

    private compileFunctions() {
        let func: GenericFunction = null;
        let rawFunc: GenericFunction = null;

        if (this._key === null) {
            // This context is being created by a function call
            // not by property access

            // get raw function parent function
            rawFunc = this._parent._rawFunc;

            // create new function by invoking parent function with given args
            rawFunc = rawFunc(...this._args);

            // Compose this function with closest keyed ancestor's parent
            let keyedRootParent = this._keyedRoot._parent;
            if (keyedRootParent !== this._root) {
                func = (...input) => rawFunc(keyedRootParent._func(...input));
            } else {
                // is starting context
                // use raw function
                func = rawFunc;
            }
        } else {
            // This context is being created by direct access to context object with key

            // get function from context object with key
            rawFunc = this._contextObject[this._key] as unknown as GenericFunction;

            if (this._parent === this._root) {
                // is starting context
                // use raw function
                func = rawFunc;
            } else {
                // compose it directly with its parent function
                func = (...input) => rawFunc(this._parent._func(...input));
            }
        }

        return {func, rawFunc};
    }
}