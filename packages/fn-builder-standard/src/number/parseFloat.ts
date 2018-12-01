import {addDynamic} from "fn-builder";
import parseFloat, {FunctionType} from "./functions/parseFloat";

addDynamic("parseFloat", parseFloat);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        parseFloat: FunctionType
    }
}

export default parseFloat;
