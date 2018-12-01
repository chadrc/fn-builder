export interface FunctionType {
    (key: PropertyKey, descriptor: PropertyDescriptor): (obj: object) => object
}

export default (key: PropertyKey, descriptor: PropertyDescriptor) =>
    (obj: object) => Object.defineProperty(obj, key, descriptor);
