import varArgsToArray, {VariableOrArrayArgFunction} from "../../shared/varArgsToArray";

export type FunctionType = VariableOrArrayArgFunction;

export default (...codes: number[]) => String.fromCodePoint(...varArgsToArray(codes));