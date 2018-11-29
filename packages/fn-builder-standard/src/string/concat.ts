import {addDynamic} from "fn-builder";
import concat, {FunctionType} from "./functions/concat";

addDynamic("concat", concat);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        concat: FunctionType
    }
}

export default concat;
