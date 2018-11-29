
export interface FunctionType {
    (compareStr: string, locales?: string | string[], options?: Intl.CollatorOptions): (str: string) => number
}

export default (compareStr: string, locales?: string | string[], options?: Intl.CollatorOptions) =>
    (str: string) => str.localeCompare(compareStr, locales, options);