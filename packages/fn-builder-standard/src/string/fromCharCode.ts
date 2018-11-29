import fromCharCode, {FunctionType} from "./functions/fromCharCode";
import {addDynamic} from "fn-builder";

addDynamic("fromCharCode", fromCharCode);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        fromCharCode: FunctionType
    }
}

export default fromCharCode;