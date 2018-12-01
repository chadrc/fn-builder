
export interface FunctionType {
    (num: number): boolean
}

export default (num: number) => Number.isFinite(num);
