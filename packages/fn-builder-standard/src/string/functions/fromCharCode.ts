import varArgsToArray, {VariableOrArrayArgFunction} from "../../shared/varArgsToArray";

export type FunctionType = VariableOrArrayArgFunction;

export default (...codes: number[]) => String.fromCharCode(...varArgsToArray(codes));