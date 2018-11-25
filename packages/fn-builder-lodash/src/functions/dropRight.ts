import dropRight = require("lodash/dropRight");

export interface FunctionType {
    (amount: number): (ary: any[]) => any[]
}

export default (amount: number) => (ary: any[]) => dropRight(ary, amount);
