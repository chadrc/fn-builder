export interface FunctionType {
    (obj: object): PropertyDescriptorMap
}

export default (obj: object) => Object.getOwnPropertyDescriptors(obj);
