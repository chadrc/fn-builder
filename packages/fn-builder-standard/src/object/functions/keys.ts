export interface FunctionType {
    (obj: object): string[]
}

export default (obj: object) => Object.keys(obj);
