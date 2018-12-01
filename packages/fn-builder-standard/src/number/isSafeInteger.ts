import {addDynamic} from "fn-builder";
import isSafeInteger, {FunctionType} from "./functions/isSafeInteger";

addDynamic("isSafeInteger", isSafeInteger);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        isSafeInteger: FunctionType
    }
}

export default isSafeInteger;
