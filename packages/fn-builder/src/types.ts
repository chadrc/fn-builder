import {InternalsKey, makeFnProxyHandler} from "./makeFnProxyHandler";

interface CacheKey {
    key: string,
    name: string;
}

interface CacheObject<T> {
    key: CacheKey;
    fn: FnBuilder<T>
}

export type CacheableFunction = () => string;

export interface Cacheable {
    fnCacheString: string | CacheableFunction
}

export interface FnContextOptions {
    useArgValuesInName?: boolean;
    caching?: boolean
}

export type GenericFunction = (...arg: any) => any

/**
 * type StringFunc = (arg) => string
 *
 * type NumFunc = (arg) => number
 * type MathFunc = (arg) => NumFunc
 *
 * class MyFn {
 *     func1: StringFunc
 *     func2: MathFunc
 * }
 * const fn = FnBuilder.from(new MyFn()); type = FnBuilder<MyFn>
 *
 * const func1 = fn.func1; type = FnProperty<MyFn, StringFunc>
 *
 * const func1fn = func1.fn; type = StringFunc
 *
 * const func2 = fn.func2; type = FnPropertyFunction<MyFn, NumFunc, MathFunc>
 *
 * const func3 = fn.func2(value); type = FnProperty<MyFn, NumFunc>
 *
 * const func3fn = func3.fn; type = NumFunc
 *
 * const func4 = fn.func1.func2(value); FnProperty<MyFn, StringFunc>
 *
 * const func4fn = func4.fn; StringFunc
 */

type FnPropertyFunction<T, R, F > = F extends (...arg: infer U) => any ?
    ReturnType<F> extends (...arg: any[]) => any ?
        (...args: U) => PropertyOrFunction<T, R, ReturnType<F>>
        : never // Already know that F is a function that returns a function, but need the checks to infer args
    : never;

type PropertyOrFunction<T, R, F> = F extends (...arg: infer U) => any ?
    ReturnType<F> extends (...arg: any[]) => any ?
        FnPropertyFunction<T, R, F>
        :
        FnProperty<T, R>
    :
    FnProperty<T, R>;

type FnProperty<T, R> = {
    [P in keyof T]: PropertyOrFunction<T, R, T[P]>
} & {
    fn: LastFunctionReturnType<R>
}

type LastFunctionReturnType<FunctionType> = FunctionType extends (...arg: infer U) => any ?
    ReturnType<FunctionType> extends (...arg: any[]) => any ?
        ReturnType<FunctionType>
        :
        FunctionType
    :
    never; // Not a function type, should never happen

export type FnBuilder<T> = {
    [P in keyof T]: PropertyOrFunction<T, T[P], T[P]>;
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
    private readonly _name: string;
    private readonly _cacheKey: string;

    private _builtFunction: Function = null;

    static build = (context: FnContext<any>) => {
        if (context._builtFunction) {
            // resulting function is placed on context after first build
            // should result in same function every time this function is called
            // return if exists so references can be equal to each other
            return context._builtFunction;
        }

        const root = context._root;
        const obj = root._contextObject;

        // A single compiled function consists of a keyed root
        // and any subsequent contexts with args
        // ex.
        // func1(arg1).func2.func3(arg2)(arg3)
        // would result in three compiled functions
        // 1 - func1(arg1)
        // 2 - func2
        // 3 - func3(arg2)(arg3)

        const compiledFunctions = [];

        // we start at the end of the chain
        // (arg3) from above example

        let currentContext = context;

        while (currentContext != root) {
            // get keyed root
            const keyedRoot = currentContext._keyedRoot;

            // get raw function
            let func = obj[keyedRoot._key];

            // If we are not at the keyed root
            // we need to call the keyed root function with args in subsequent contexts
            if (keyedRoot !== currentContext)  {

                // go up chain until keyed root
                // collect all arg contexts for current function

                let currArgContext = currentContext;

                const argContexts = [];
                while (currArgContext !== keyedRoot) {
                    argContexts.push(currArgContext);
                    currArgContext = currArgContext._parent;
                }

                // start with closest to keyed root using reversed list
                // call function with arguments to get final version of function
                for (const argContext of argContexts.reverse()) {
                    func = func(...argContext._args);
                }
            }

            // wrap func in a new function that will pass through args

            compiledFunctions.push(func);

            // Next context to make a function with is always the keyed root's parent
            currentContext = keyedRoot._parent;
        }

        // Merge compiled functions into one function

        // start with closest to root function
        let ordered = compiledFunctions.slice().reverse();

        let first = ordered.shift();

        let finalFunction = (...input: any[]) => first(...input);
        while (ordered.length > 0) {
            // wrap each function passing down the arguments
            const next = ordered.shift();
            const prev = finalFunction;
            finalFunction = (...input: any[]) => next(prev(...input));
        }

        // cache function
        context._builtFunction = finalFunction;
        return finalFunction;
    };

    static makeFnRoot = <T extends object>(
        obj: T,
        options: FnContextOptions,
    ) => {
        // make a root context
        const func = (() => {}) as unknown as FnContextWrapper<T>;
        func.context = new FnContext<T>(obj, options);

        // Root context doesn't get cached
        // just create and return it
        return new Proxy(func, makeFnProxyHandler()) as unknown as FnBuilder<T>;
    };

    static makeFnProxyObject = <T extends object>(
        parentContext: FnContext<T> = null,
        key: keyof T = null,
        args: any[] = [],
    ): FnBuilder<T> => {

        // Check root context's cache for existing object
        const root = parentContext._root;
        const cacheKey: CacheKey = FnContext.compileCacheKeyForContext<T>(
            root,
            parentContext,
            key,
            args,
        );

        if (root._options.caching
            && root._contextCache[cacheKey.key]) {
            let cacheObject = root._contextCache[cacheKey.key];
            return cacheObject.fn;
        }

        // cache key wasn't in the cache

        // create a new fn object
        const func = (() => {}) as unknown as FnContextWrapper<T>;
        func.context = new FnContext<T>(
            cacheKey.name,
            parentContext,
            cacheKey.key,
            key,
            args
        );

        const fn = new Proxy(func, makeFnProxyHandler()) as unknown as FnBuilder<T>;

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

        // Function to convert an arg value to a key that will help make each entry unique
        const getArgKey = (arg: Cacheable | any, internalKey: "_cacheKey" | "_name") => {
            // Start with letting JavaScript toString value
            let key = null;
            if (arg && arg.fnCacheString) {
                // If cacheable get custom cache key
                // can be a function or string literal
                if (typeof arg.fnCacheString === "function") {
                    key = arg.fnCacheString();
                } else {
                    key = arg.fnCacheString;
                }
            } else if (arg[InternalsKey]) {
                let argInternal = arg[InternalsKey] as FnContext<T>;
                key = argInternal[internalKey];
            }

            return key;
        };

        const getCacheKey = (arg: Cacheable | any) => {
            return getArgKey(arg, "_cacheKey") || `${arg}`;
        };

        const getNameKey = (arg: Cacheable | any) => {
            return getArgKey(arg, "_name") || (typeof arg);
        };

        // Format arg sets into comma separated lists wrapped in parenthesis
        let argStr = argSets
            .reverse() // because we started at end
            .map(set => `(${set.map(getCacheKey).join(",")})`);

        keyName = `${rootKey.toString()}${argStr.join("")}`;

        if (rootContext._options.useArgValuesInName) {
            name = keyName;
        } else {
            // If not using arg values in name
            // make new string with not values
            let noArgValueStr = argSets
                .reverse() // because we started at end
                .map(set =>
                    `(${set.map(getNameKey)
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
                keyName = `${keyName}(${wrappedContext._cacheKey})`;
                name = `${name}(${wrappedContext._name})`;
            } else {
                // No wrapped context, this is top of hierarchy
                // only name get input on end for display
                name += "(__input__)";
            }
        } else {
            // No wrapped context, this is top of hierarchy
            // only name get input on end for display
            name += "(__input__)";
        }

        return {
            key: keyName,
            name
        };
    }

    private constructor(
        obj: T | string,
        parent: FnContext<T> | FnContextOptions,
        cacheKey: string = null,
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

        this._cacheKey = cacheKey;
        this._key = key;
        this._args = args || [];

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
        }
    }

    get name() {
        return this._name;
    }

    get contextObject() {
        return this._root._contextObject;
    }
}