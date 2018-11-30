
export interface FunctionType {
    (separator: string, limit?: number): (str: string) => string[]
}

export default (separator: string, limit?: number) => (str: string) => str.split(separator, limit);
