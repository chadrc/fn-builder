export interface FunctionType {
    (key: PropertyKey): (obj: object) => boolean
}

export default (key: PropertyKey) => (obj: object) => obj.propertyIsEnumerable(key);
