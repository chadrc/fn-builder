import differenceBy = require("lodash/differenceBy");

export interface FunctionType {
    (values: any[], iteratee: Function): (ary: any[]) => any[]
}

export default (values: any[], iteratee: Function) => (ary: any[]) => differenceBy(ary, values, iteratee);
