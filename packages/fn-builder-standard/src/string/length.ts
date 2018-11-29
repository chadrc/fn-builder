import {addDynamic} from "fn-builder";
import length, {FunctionType} from "./functions/length";

addDynamic("length", length);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        length: FunctionType
    }
}

export default length;
