/**
 * Used to allow either variable arguments or an array as the first argument
 * Returns either original list if variable arguments
 * Or pulls out first argument if it is an array
 * Note - won't work if function is expecting a multi-dimensional array
 * @param args
 */
export default <T>(args: T[]): T[] => {
    let actual = args;
    if (actual && actual.length > 0
        && Array.isArray(actual[0])) {
        actual = actual[0] as unknown as T[];
    }
    return actual;
}

interface VariableArgs {
    (...codes: number[]): string
}

interface ArrayArg {
    (codes: number[]): string
}

export type VariableOrArrayArg = ArrayArg | VariableArgs;