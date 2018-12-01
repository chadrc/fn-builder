
export interface FunctionType {
    (replacer?: (key: string, value: any) => any, space?: number): (obj: any) => any
}

export default (replacer?: (key: string, value: any) => any, space?: number) =>
    (obj: any) => JSON.stringify(obj, replacer, space);
