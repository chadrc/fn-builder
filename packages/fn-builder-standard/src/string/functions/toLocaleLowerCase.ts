
export interface FunctionType {
    (locale?: string | string[]): (str: string) => string
}

// parameters for toLocaleLowerCase are in specification but not in types
// cast to any to compile
export default (locale?: string | string[]) => (str: string) => (str as any).toLocaleLowerCase(locale);