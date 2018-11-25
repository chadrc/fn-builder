import differenceBy = require("lodash/differenceBy");

export interface FunctionType {
    (values: any[], iteratee: Function | string): (ary: any[]) => any[]
}

export default (values: any[], iteratee: Function | string) => (ary: any[]) => differenceBy(ary, values, iteratee);
