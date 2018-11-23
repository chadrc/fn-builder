import {makeFnProxyHandler} from "./makeFnProxyHandler";

interface CacheKey {
    key: string,
    name: string;
    argSets: any[][]
}

interface CacheObject<T> {
    key: CacheKey;
    fn: Fn<T>
}

export interface FnContextOptions {
    useArgValuesInName: boolean
}

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
    private readonly _options: FnContextOptions;
    private readonly _parent?: FnContext<T>;
    private readonly _key?: keyof T;
    private readonly _contextCache?: { [key: string]: CacheObject<T> };
    private readonly _root: FnContext<T>;
    private readonly _args: any[];
    private readonly _keyedRoot: FnContext<T>;
    private readonly _func: GenericFunction;
    private readonly _rawFunc: GenericFunction;
    private readonly _name: string;

    static makeFnRoot = <T extends object>(
        obj: T,
        options: FnContextOptions,
    ) => {
        // make a root context
        const func = (() => {}) as unknown as FnContextWrapper<T>;
        func.context = new FnContext<T>(obj, options);

        // Root context doesn't get cached
        // just create and return it
        return new Proxy(func, makeFnProxyHandler()) as unknown as Fn<T>;
    };

    static makeFnProxyObject = <T extends object>(
        parentContext: FnContext<T> = null,
        key: keyof T = null,
        args: any[] = [],
    ): Fn<T> => {

        // Check root context's cache for existing object
        const root = parentContext._root;
        const cacheKey: CacheKey = FnContext.compileCacheKeyForContext<T>(
            root,
            parentContext,
            key,
            args,
        );

        if (root._contextCache[cacheKey.key]) {
            let cacheObject = root._contextCache[cacheKey.key];

            // hash matches
            // but we need to compare the args
            // or functions that take other functions or objects

            const flatten = (prev: any[], curr: any[]) => {
                prev.push(...curr);
                return prev;
            };

            // first flatten the argSets to a single arg array
            let existingCacheArgs = cacheObject.key.argSets.reduce(flatten, []);
            let newCacheArgs = cacheKey.argSets.reduce(flatten, []);

            // simple size check first
            if (newCacheArgs.length === existingCacheArgs.length) {

                let allAreEqual = true;
                for (let i=0; i<newCacheArgs.length; i++) {
                    const existing = existingCacheArgs[i];
                    const n = newCacheArgs[i];
                    if (existing !== n) {
                        allAreEqual = false;
                        break;
                    }
                }

                if (allAreEqual) {
                    // returned cached object
                    return cacheObject.fn;
                }
            }
        }

        // cache key wasn't in the cache
        // or the arguments didn't match

        // create a new fn object
        const func = (() => {}) as unknown as FnContextWrapper<T>;
        func.context = new FnContext<T>(
            cacheKey.name,
            parentContext,
            key,
            args
        );

        const fn = new Proxy(func, makeFnProxyHandler()) as unknown as Fn<T>;

        // put new fn object in cache
        root._contextCache[cacheKey.key] = {
            key: cacheKey,
            fn: fn
        };
        return fn;
    };

    private static compileCacheKeyForContext<T>(
        rootContext: FnContext<T>,
        parentContext: FnContext<T>,
        key: keyof T = null,
        args: any[] = []
    ): CacheKey {
        let name;
        let keyName;

        let argSets = [];
        if (args && args.length > 0) {
            argSets.push(args);
        }

        // get key/name of function
        let rootKey = key;
        if (!rootKey) {
            // no key for this context
            // use the parent context's keyed root
            // which can be itself
            rootKey = parentContext._keyedRoot._key;

            // walk up the hierarchy until the keyed root
            // getting remaining arg sets
            let next = parentContext;
            while (next !== parentContext._keyedRoot && next !== rootContext) {
                if (next._args) {
                    argSets.push(next._args);
                }
                next = next._parent;
            }
        }

        // Format arg sets into comma separated lists wrapped in parenthesis
        // Use arg values for cache key
        let argStr = argSets
            .reverse() // because we started at end
            .map(set =>
                `(${set.map(arg => `${arg}`)
                    .join(",")})`
            );

        keyName = `${rootKey.toString()}${argStr.join("")}`;

        if (rootContext._options.useArgValuesInName) {
            name = keyName;
        } else {
            // If not using arg values in name
            // make new string with not values
            let noArgValueStr = argSets
                .reverse() // because we started at end
                .map(set =>
                    `(${set.map(arg => typeof arg)
                        .join(",")})`
                );

            name = `${rootKey.toString()}${noArgValueStr.join("")}`;
        }

        if (parentContext !== rootContext) {

            // Get context that is passed into this context
            // when called as a function

            // start with parent
            let wrappedContext = parentContext;
            if (!key) {
                // if we don't have a key
                // we have already handled all contexts up to the keyed root
                // so wrapped context will be the keyed root's parent
                wrappedContext = parentContext._keyedRoot._parent;
            }

            if (wrappedContext !== rootContext) {
                name = `${name}(${wrappedContext._name})`;
            } else {
                // No wrapped context, this is top of hierarchy
                name += "(__input__)";
            }
        } else {
            // No wrapped context, this is top of hierarchy
            name += "(__input__)";
        }

        return {
            key: keyName,
            name,
            argSets
        };
    }

    private constructor(
        obj: T | string,
        parent: FnContext<T> | FnContextOptions,
        key: keyof T = null,
        args: any[] = [],
    ) {
        // Set object if root
        // name otherwise
        if (typeof obj === "string") {
            this._name = obj;
        } else {
            this._contextObject = obj;
        }

        if (parent instanceof FnContext) {
            this._parent = parent;
        } else {
            // Only root should have options
            this._options = parent;
            this._parent = null;
        }

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

            if (!this._key) {
                this._keyedRoot = this._parent._keyedRoot;
            } else {
                this._keyedRoot = this;
            }

            // root doesn't need a name
            // this._name = this.compileName();

            let compiledFunctions = this.compileFunctions();

            this._func = compiledFunctions.func;
            this._rawFunc = compiledFunctions.rawFunc;
        }
    }

    get name() {
        return this._name;
    }

    get contextObject() {
        return this._root._contextObject;
    }

    get func(): GenericFunction {
        return this._func;
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
            rawFunc = this._root._contextObject[this._key] as unknown as GenericFunction;

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