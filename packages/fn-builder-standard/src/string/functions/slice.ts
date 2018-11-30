
export interface FunctionType {
    (start: number, end?: number): (str: string) => string
}

export default (start: number, end?: number) => (str: string) => str.slice(start, end);
