import {addDynamic} from "fn-builder";
import split, {FunctionType} from "./functions/split";

addDynamic("split", split);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        split: FunctionType
    }
}

export default split;
