import varArgsOrArray, {VariableOrArrayArgFunction} from "../../shared/varArgsToArray";

export type FunctionType = VariableOrArrayArgFunction<string, string[]>

export default (...strs: string[]) => (str: string) => str.concat(...varArgsOrArray(strs));
