
export interface FunctionType {
    (num: number): boolean
}

export default (num: number) => Number.isSafeInteger(num);
