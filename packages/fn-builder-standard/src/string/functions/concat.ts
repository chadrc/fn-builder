import varArgsOrArray from "../../shared/varArgsToArray";

export interface FunctionType {
    (...strs: string[]): (str: string) => string
}

export default (...strs: string[]) => (str: string) => {
    return str.concat(...varArgsOrArray(strs));
}
