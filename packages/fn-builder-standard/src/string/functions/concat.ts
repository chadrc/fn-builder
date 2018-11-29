import varArgsOrArray, {VariableOrArrayArgFunction} from "../../shared/varArgsToArray";

export type FunctionType = VariableOrArrayArgFunction

export default (...strs: string[]) => (str: string) => str.concat(...varArgsOrArray(strs));
