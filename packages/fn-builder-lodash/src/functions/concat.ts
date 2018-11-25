import concat = require("lodash/concat");

export interface FunctionType {
    (...values: any[]): (ary: any[]) => any[];
}

export default (...values: any[]) => (ary: any[]) => concat(ary, ...values);