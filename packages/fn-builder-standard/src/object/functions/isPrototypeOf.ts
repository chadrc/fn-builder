export interface FunctionType {
    (proto: object): (obj: object) => boolean
}

export default (proto: object) => (obj: object) => obj.isPrototypeOf(proto);
