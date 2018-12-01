
export interface FunctionType {
    (digits: number): (num: number) => string
}

export default (digits: number) => (num: number) => num.toFixed(digits);
