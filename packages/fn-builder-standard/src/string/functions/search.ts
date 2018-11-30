
export interface FunctionType {
    (regexp: string | RegExp): (str: string) => number
}

export default (regexp: string | RegExp) => (str: string) => str.search(regexp);
