import {addDynamic} from "fn-builder";
import valueOf, {FunctionType} from "./functions/valueOf";

addDynamic("objValueOf", valueOf);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        objValueOf: FunctionType
    }
}

export default valueOf;
