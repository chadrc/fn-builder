import difference = require("lodash/difference");

export interface FunctionType {
    (...values: any[]): (ary: any[]) => any[]
}

export default (...values: any[]) => (ary: any[]) => difference(ary, ...values);
