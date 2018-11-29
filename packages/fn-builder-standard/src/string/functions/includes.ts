export interface FunctionType {
    (searchStr: string, position?: number): (str: string) => boolean
}

export default (searchStr: string, position?: number) => (str: string) => str.includes(searchStr, position);
