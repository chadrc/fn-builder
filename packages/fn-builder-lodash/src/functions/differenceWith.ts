import differenceWith = require("lodash/differenceWith");

export interface FunctionType {
    (values: any[], comparator: Function): (ary: any[]) => any[]
}

export default (values: any[], comparator: Function) => (ary: any[]) => differenceWith(ary, values, comparator);
