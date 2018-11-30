
type Replacer = (substring: string, ...args: any[]) => string

export interface FunctionType {
    (pattern: string | RegExp, replacement: string | Replacer): (str: string) => string
    // (pattern: string | RegExp, replacement: (substring: string, ...args: any[]) => string): (str: string) => string
}

export default (pattern: string | RegExp, replacement: string) => (str: string) => str.replace(pattern, replacement);
