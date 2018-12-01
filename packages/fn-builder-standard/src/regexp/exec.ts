import {addDynamic} from "fn-builder";
import exec, {FunctionType} from "./functions/exec";

addDynamic("exec", exec);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        exec: FunctionType
    }
}

export default exec;
