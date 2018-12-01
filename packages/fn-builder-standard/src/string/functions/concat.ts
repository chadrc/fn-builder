import varArgsOrArray from "../../shared/varArgsToArray";

interface ArrayArg<T, R> {
    (codes: T[]): R
}

export type FunctionType = ArrayArg<string, (str: string) => string>

export default ((...strs: string[]) => (str: string) => str.concat(...varArgsOrArray(strs))
) as unknown as FunctionType;
