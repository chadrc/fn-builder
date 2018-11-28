import dropWhile = require("lodash/dropWhile");

export interface FunctionType {
    (predicate: any): (ary: any[]) => any
}

export default (predicate: any) => (ary: any[]) => dropWhile(ary, predicate);
