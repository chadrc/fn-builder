import fromCodePoint, {FunctionType} from "./functions/fromCodePoint";
import {addDynamic} from "fn-builder";

addDynamic("fromCodePoint", fromCodePoint);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        fromCodePoint: FunctionType
    }
}

export default fromCodePoint