export interface FunctionType {
    (properties: PropertyDescriptorMap): (obj: object) => object
}

export default (properties: PropertyDescriptorMap) => (obj: object) => Object.defineProperties(obj, properties);
