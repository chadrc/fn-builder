export interface FunctionType {
    (proto: object): (obj: object) => boolean
}

export default (proto: object) => (obj: object) => Object.getPrototypeOf(obj).isPrototypeOf(proto);
