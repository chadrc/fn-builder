export interface FunctionType {
    (proto: object): (obj: object) => object
}

export default (proto: object) => (obj: object) => Object.setPrototypeOf(obj, proto);
