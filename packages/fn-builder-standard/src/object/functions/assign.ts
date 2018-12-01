import varArgsToArray from "../../shared/varArgsToArray";

export interface FunctionType {
    (objs: object[]): (obj: object) => object
}

export default (...objs: object[]) => (obj: object) => Object.assign(obj, ...varArgsToArray(objs));
