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

const makeFnProxyHandler = <T extends object> (): ProxyHandler<FnContextWrapper<T>> => {
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
        apply: function(target: FnContextWrapper<T>, thisArg: any, argumentsList: any) {
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
    private _paramValue?: ParamValue;

    constructor(
        obj: T,
        parent: FnContext<T> = null,
        key: keyof T = null,
        value: ParamValue = null
    ) {
        this._contextObject = obj;
        this._parent = parent;
        this._key = key;
        this._paramValue = value;
    }

    get contextObject() {
        return this._contextObject;
    }

    get parent(): FnContext<T> {
        return this._parent;
    }

    get key(): keyof T {
        return this._key;
    }

    get func(): GenericFunction {
        let f = this._contextObject[this._key] as unknown as GenericFunction;
        if (this._paramValue) {
            f = f(this._paramValue) as unknown as GenericFunction;
        }
        return f;
    }

    get paramValue(): ParamValue {
        return this._paramValue;
    }

    set paramValue(v: any) {
        this._paramValue = v;
    }
}

interface FnContextWrapper<T> {
    context: FnContext<T>
}

const makeFnContext = <T> (
    obj: T,
    parent: FnContext<T> = null,
    key: keyof T = null,
    value: ParamValue = null
) : FnContextWrapper<T> => {
    const func = () => {};
    func.context = new FnContext<T>(obj, parent, key, value);
    return func;
};

const makeFnProxy = <T extends object> (obj: T, root: FnContext<T> = null, key: keyof T = null, value: ParamValue = null): Fn<T> => {
    return new Proxy(
        makeFnContext(obj, root, key, value),
        makeFnProxyHandler()
    ) as unknown as Fn<T>;
};

export const make = <T extends object> (obj?: T): Fn<T> => {
    return makeFnProxy(obj);
};
