
export interface FunctionType {
    (count: number): (str: string) => string
}

export default (count: number) => (str: string) => str.repeat(count);
