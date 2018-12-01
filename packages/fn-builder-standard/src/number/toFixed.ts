import {addDynamic} from "fn-builder";
import toFixed, {FunctionType} from "./functions/toFixed";

addDynamic("toFixed", toFixed);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        toFixed: FunctionType
    }
}

export default toFixed;
