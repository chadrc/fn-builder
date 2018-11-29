export interface FunctionType {
    (pos: number): (str: string) => number
}

export default (pos: number) => (str: string) => str.codePointAt(pos);
