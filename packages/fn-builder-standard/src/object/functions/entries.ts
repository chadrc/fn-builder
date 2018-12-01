export interface FunctionType {
    (obj: object): [string, any][]
}

export default (obj: object) => Object.entries(obj);
