type GenericFunction = (val: any) => any

type Fn<T> = {
    [P in keyof T]: Fn<T> & GenericFunction;
}

type ParamValue = any;

const optimisticCast = (value: string): ParamValue => {
    const intVal = parseInt(value);
    if (!isNaN(intVal)) {
        return intVal;
    }

    if (value === "true") {
        return true
    } else if (value === "false") {
        return false;
    }

    return value;
};

const makeFnProxyHandler = <T extends object>(): ProxyHandler<FnContextWrapper<T>> => {
    return {
        get: function (thisArg: FnContextWrapper<T>, prop: keyof T) {
            if (!!(thisArg.context.contextObject[prop])) {
                return makeFnProxy(
                    thisArg.context.contextObject,
                    thisArg.context,
                    prop
                );
            }
        },
        apply: function (target: FnContextWrapper<T>, thisArg: any, argumentsList: any) {
            // Quick check to see if this context returns another function
            try {
                // Wrap in try-catch cause we don't now what function does
                let r = target.context.func({});

                // If this function returns a function
                // consider this call a composition call
                // instead of a call to retrieve this chains result
                if (typeof r === "function") {
                    target.context.paramValue = argumentsList[0];
                    return new Proxy(
                        target,
                        makeFnProxyHandler()
                    );
                }
            } catch (e) {
                // Do nothing, since we don't know how the function works
                // the parameter we passed may have caused the error
            }

            let contexts = [];

            // This is the last context in the chain
            let lastContext = target.context;

            // Make array of contexts all the way up to parent
            while (lastContext.parent !== null) {
                contexts.push(lastContext);
                lastContext = lastContext.parent;
            }

            // Reverse method chain for proper order
            contexts = contexts.reverse();

            // start with given argument
            let result = argumentsList[0];

            // Loop through methods passing the result of the previous to the next
            for (const c of contexts) {
                let method: GenericFunction = c.func;
                result = method(result);
            }

            if (typeof result === "function") {
                target.context.paramValue = argumentsList[0];
                return new Proxy(
                    target,
                    makeFnProxyHandler()
                );
            }
            return result;
        }
    }
};

class FnContext<T> {
    private readonly _contextObject: T;
    private readonly _parent?: FnContext<T>;
    private readonly _key?: keyof T;

    private _func: GenericFunction;

    constructor(
        obj: T,
        parent: FnContext<T> = null,
        key: keyof T = null
    ) {
        this._contextObject = obj;
        this._parent = parent;
        this._key = key;
        this._func = obj[key] as unknown as GenericFunction;
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

    set paramValue(v: any) {
        this._func = this._func(v);
    }
}

interface FnContextWrapper<T> {
    context: FnContext<T>
}

const makeFnContext = <T>(
    obj: T,
    parent: FnContext<T> = null,
    key: keyof T = null
): FnContextWrapper<T> => {
    const func = () => {
    };
    func.context = new FnContext<T>(obj, parent, key);
    return func;
};

const makeFnProxy = <T extends object>(obj: T, root: FnContext<T> = null, key: keyof T = null): Fn<T> => {
    return new Proxy(
        makeFnContext(obj, root, key),
        makeFnProxyHandler()
    ) as unknown as Fn<T>;
};

export const make = <T extends object>(obj: T): Fn<T> => {
    return makeFnProxy(obj);
};
