
export interface FunctionType {
    (fractionalDigits: number): (num: number) => string
}

export default (fractionalDigits: number) => (num: number) => num.toExponential(fractionalDigits);
