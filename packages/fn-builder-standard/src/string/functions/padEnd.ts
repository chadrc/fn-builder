
export interface FunctionType {
    (targetLength: number, padString?: string): (str: string) => string;
}

export default (targetLength: number, padString?: string) => (str: string) => str.padEnd(targetLength, padString);
