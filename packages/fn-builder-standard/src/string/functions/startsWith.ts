
export interface FunctionType {
    (searchStr: string, position?: number): (str: string) => number
}

export default (searchStr: string, position?: number) => (str: string) => str.startsWith(searchStr, position);
