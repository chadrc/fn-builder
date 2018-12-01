
export interface FunctionType {
    (reviver?: (key: any, value: any) => any): (str: string) => any
}

export default (reviver: (key: any, value: any) => any) => (str: string) => JSON.parse(str, reviver);
