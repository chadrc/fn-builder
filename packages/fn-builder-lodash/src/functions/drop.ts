import drop = require("lodash/drop");

export interface FunctionType {
    (amount: number): (ary: any[]) => any[]
}

export default (amount: number) => (ary: any[]) => drop(ary, amount);
