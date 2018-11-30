
export interface FunctionType {
    (locale?: string | string[]): (str: string) => string
}

// parameters for toLocaleUpperCase are in specification but not in types
// cast to any to compile
export default (locale?: string | string[]) => (str: string) => (str as any).toLocaleUpperCase(locale);
