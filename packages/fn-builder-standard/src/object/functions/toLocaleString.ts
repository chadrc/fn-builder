export interface FunctionType {
    (obj: object): string
}

export default (obj: object) => obj.toLocaleString();
