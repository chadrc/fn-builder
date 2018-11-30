import {addDynamic} from "fn-builder";
import trim, {FunctionType} from "./functions/trim";

addDynamic("trim", trim);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        trim: FunctionType
    }
}

export default trim;
