import varArgsToArray, {VariableOrArrayArgFunction} from "../../shared/varArgsToArray";

export type FunctionType = VariableOrArrayArgFunction<number, string>;

export default (...codes: number[]) => String.fromCharCode(...varArgsToArray(codes));