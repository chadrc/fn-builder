import dropRightWhile = require("lodash/dropRightWhile");

export interface FunctionType {
    (predicate: any): (ary: any[]) => any
}

export default (predicate: any) => (ary: any[]) => dropRightWhile(ary, predicate);
