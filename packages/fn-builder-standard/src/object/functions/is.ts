export interface FunctionType {
    (obj1: object): (obj2: object) => boolean
}

export default (obj1: object) => (obj2: object) => Object.is(obj1, obj2);
