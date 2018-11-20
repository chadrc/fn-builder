type GenericFunction = (val: any) => any

type Fn<T> = {
    [P in keyof T]: Fn<T> & GenericFunction;
}

const makeFnProxyHandler = <T extends object> (): ProxyHandler<FnContextWrapper<T>> => {
    return {
        get: function (thisArg: FnContextWrapper<T>, prop: keyof T) {
            if (!!(thisArg.context.contextObject[prop])) {
                return makeFnProxy(thisArg.context.contextObject, thisArg.context, prop);
            }
        },
        apply: function(target: FnContextWrapper<T>, thisArg: any, argumentsList: any) {
            let methods = [];

            // Grabbing here even though is same on all contexts in chain
            let contextObject = target.context.contextObject;
            let context = target.context;

            // Get method chain
            while (context.parent !== null) {
                methods.push(context.key);
                context = context.parent;
            }

            // Reverse method chain for proper order
            methods = methods.reverse();

            // start with given argument
            let result = argumentsList[0];

            // Loop through methods passing the result of the previous to the next
            for (const methodName of methods) {
                let method: GenericFunction = contextObject[methodName] as unknown as GenericFunction;
                result = method(result);
            }

            return result;
        }
    }
};

class FnContext<T> {
    private readonly _contextObject: T;
    private readonly _parent?: FnContext<T>;
    private readonly _key?: keyof T;

    constructor(
        obj: T,
        parent: FnContext<T> = null,
        key: keyof T = null
    ) {
        this._contextObject = obj;
        this._parent = parent;
        this._key = key;
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
}

interface FnContextWrapper<T> {
    context: FnContext<T>
}

const makeFnContext = <T> (
    obj: T,
    parent: FnContext<T> = null,
    key: keyof T = null
) : FnContextWrapper<T> => {
    const func = () => {};
    func.context = new FnContext<T>(obj, parent, key);
    return func;
};

const makeFnProxy = <T extends object> (obj: T, root: FnContext<T> = null, key: keyof T = null): Fn<T> => {
    return new Proxy(
        makeFnContext(obj, root, key),
        makeFnProxyHandler()
    ) as unknown as Fn<T>;
};

export const make = <T extends object> (obj?: T): Fn<T> => {
    return makeFnProxy(obj);
};
