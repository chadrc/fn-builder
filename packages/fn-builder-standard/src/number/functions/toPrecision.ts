
export interface FunctionType {
    (precision: number): (num: number) => string
}

export default (precision: number) => (num: number) => num.toPrecision(precision);
