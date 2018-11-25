import * as FnBuilder from "fn-builder";
import slice, {FunctionType} from "./functions/slice";

FnBuilder.addDynamic("slice", slice);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        slice: FunctionType
    }
}

export default slice;
