
export interface FunctionType {
    (regexp: RegExp): (str: string) => boolean
}

export default (regexp: RegExp) => (str: string) => regexp.test(str);