import varArgsToArray, {VariableOrArrayArg} from "../../shared/varArgsToArray";

export type FunctionType = VariableOrArrayArg;

export default (...codes: number[]) => String.fromCodePoint(...varArgsToArray(codes));