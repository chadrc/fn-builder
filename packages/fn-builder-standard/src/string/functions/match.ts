
export interface FunctionType {
    (regex: string | RegExp): (str: string) => RegExpMatchArray | null
}

export default (regex: string | RegExp) => (str: string) => str.match(regex);