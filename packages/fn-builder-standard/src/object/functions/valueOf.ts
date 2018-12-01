export interface FunctionType {
    (obj: object): Object
}

export default (obj: object) => obj.valueOf();
