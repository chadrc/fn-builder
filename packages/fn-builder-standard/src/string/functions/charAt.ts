export interface FunctionType {
    (pos: number): (str: string) => string
}

export default (pos: number) => (str: string) => str.charAt(pos);
