import compact = require("lodash/compact");

export interface FunctionType {
    (ary: any[]): any[];
}

export default (ary: any[]) => compact(ary);