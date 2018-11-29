import varArgsOrArray, {VariableOrArrayArg} from "../../shared/varArgsToArray";

export type FunctionType = VariableOrArrayArg

export default (...strs: string[]) => (str: string) => str.concat(...varArgsOrArray(strs));
