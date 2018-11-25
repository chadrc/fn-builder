import * as FnBuilder from "fn-builder";
import cloneWith, {FunctionType} from "./functions/cloneWith";

FnBuilder.addDynamic("cloneWith", cloneWith);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        cloneWith: FunctionType
    }
}

export default cloneWith;
