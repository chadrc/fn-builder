
export interface FunctionType {
    (str: string): number
}

export default (str: string) => Number.parseFloat(str);
