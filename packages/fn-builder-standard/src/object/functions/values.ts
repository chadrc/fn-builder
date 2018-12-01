export interface FunctionType {
    (obj: object): any[]
}

export default (obj: object) => Object.values(obj);
