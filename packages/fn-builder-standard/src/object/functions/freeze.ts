export interface FunctionType {
    (obj: object): object
}

export default (obj: object) => Object.freeze(obj);
