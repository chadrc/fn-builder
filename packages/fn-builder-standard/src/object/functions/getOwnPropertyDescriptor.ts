export interface FunctionType {
    (key: PropertyKey): (obj: object) => PropertyDescriptor
}

export default (key: PropertyKey) => (obj: object) => Object.getOwnPropertyDescriptor(obj, key);
