
export interface FunctionType {
    (str: string): string
}

// no typings, use any cast
export default (str: string) => str.trim();