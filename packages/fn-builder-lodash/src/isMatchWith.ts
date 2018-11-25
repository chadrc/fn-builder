import * as FnBuilder from "fn-builder";
import isMatchWith, {FunctionType} from "./functions/isMatchWith";

FnBuilder.addDynamic("isMatchWith", isMatchWith);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        isMatchWith: FunctionType
    }
}

export default isMatchWith;
