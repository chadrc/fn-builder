export interface FunctionType {
    (obj: object): Symbol[]
}

export default (obj: object) => Object.getOwnPropertySymbols(obj);
