
interface VariableArgs {
    (...codes: number[]): string
}

interface ArrayArg {
    (codes: number[]): string
}

export type FunctionType = ArrayArg | VariableArgs;

export default (...codes: number[]) => {
    let charCodes = codes;
    if (charCodes && charCodes.length > 0
        && Array.isArray(charCodes[0])) {
        charCodes = charCodes[0] as unknown as number[];
    }
    return String.fromCharCode(...charCodes);
}