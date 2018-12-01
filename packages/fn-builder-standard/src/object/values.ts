import {addDynamic} from "fn-builder";
import values, {FunctionType} from "./functions/values";

addDynamic("values", values);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        values: FunctionType
    }
}

export default values;
