import * as FnBuilder from "fn-builder";
import isEqualWith, {FunctionType} from "./functions/isEqualWith";

FnBuilder.addDynamic("isEqualWith", isEqualWith);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        isEqualWith: FunctionType
    }
}

export default isEqualWith;
