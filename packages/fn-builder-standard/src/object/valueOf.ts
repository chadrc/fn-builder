import {addDynamic} from "fn-builder";
import valueOf, {FunctionType} from "./functions/valueOf";

addDynamic("valueOf", valueOf);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        valueOf: FunctionType
    }
}

export default valueOf;
