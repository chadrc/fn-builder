export interface FunctionType {
    (searchStr: string, from?: number): (str: string) => number
}

export default (searchStr: string, from?: number) => (str: string) => str.lastIndexOf(searchStr, from);