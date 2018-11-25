import chunk = require("lodash/chunk");

export interface FunctionType {
    (size: number): (ary: any[]) => any[];
}

export default (size: number) => (ary: any[]) => chunk(ary, size);