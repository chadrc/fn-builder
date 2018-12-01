export interface FunctionType {
    (obj: object): boolean
}

export default (obj: object) => Object.isExtensible(obj);
