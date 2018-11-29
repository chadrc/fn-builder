export interface FunctionType {
    (searchStr: string, len?: number): (str: string) => boolean
}

export default (searchStr: string, len?: number) => (str: string) => str.endsWith(searchStr, len);
