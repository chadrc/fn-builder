import varArgsToArray, {VariableOrArrayArg} from "../../shared/varArgsToArray";

export type FunctionType = VariableOrArrayArg;

export default (...codes: number[]) => String.fromCharCode(...varArgsToArray(codes));