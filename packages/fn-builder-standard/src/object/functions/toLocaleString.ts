export interface FunctionType {
    (locales?: string | string[], options?: Intl.DateTimeFormatOptions): (obj: object) => string
}

// support for any object, even though meant for Dates
export default (locales?: string | string[], options?: Intl.DateTimeFormatOptions) =>
    (obj: object) => (obj as any).toLocaleString(locales, options);
