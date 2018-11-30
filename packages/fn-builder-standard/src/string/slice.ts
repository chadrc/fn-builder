import {addDynamic} from "fn-builder";
import slice, {FunctionType} from "./functions/slice";

addDynamic("slice", slice);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        slice: FunctionType
    }
}

export default slice;
