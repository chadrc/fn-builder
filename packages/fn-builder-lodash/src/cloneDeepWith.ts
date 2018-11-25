import * as FnBuilder from "fn-builder";
import cloneDeepWith, {FunctionType} from "./functions/cloneDeepWith";

FnBuilder.addDynamic("cloneDeepWith", cloneDeepWith);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        cloneDeepWith: FunctionType
    }
}

export default cloneDeepWith;
