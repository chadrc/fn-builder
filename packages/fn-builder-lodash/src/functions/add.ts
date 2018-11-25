import add = require("lodash/add");

export interface FunctionType {
    (augend: number): (addend: number) => number
}

export default (augend: number) => (addend: number) => add(augend, addend);
