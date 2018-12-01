
export interface FunctionType {
    (regexp: RegExp): (str: string) => string[]
}

export default (regexp: RegExp) => (str: string) => regexp.exec(str);
