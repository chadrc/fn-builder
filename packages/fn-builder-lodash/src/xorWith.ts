import * as FnBuilder from "fn-builder";
import xorWith, {FunctionType} from "./functions/xorWith";

FnBuilder.addDynamic("xorWith", xorWith);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        xorWith: FunctionType
    }
}

export default xorWith;
