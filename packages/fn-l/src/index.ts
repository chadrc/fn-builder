type GenericFunction = (val: any) => any

type Fn<T> = {
    [P in keyof T]: Fn<T> & GenericFunction;
}

export const make = <T> (obj?: T): Fn<T> => {
    return (obj || {}) as Fn<T>;
};
