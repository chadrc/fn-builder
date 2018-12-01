import {addDynamic} from "fn-builder";
import toExponential, {FunctionType} from "./functions/toExponential";

addDynamic("toExponential", toExponential);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        toExponential: FunctionType
    }
}

export default toExponential;
