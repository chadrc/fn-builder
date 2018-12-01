
export interface FunctionType {
    (proto: object): (propertiesObject?: PropertyDescriptorMap) => object
}

export default (proto: object) => (propertiesObject?: PropertyDescriptorMap) => Object.create(proto, propertiesObject);