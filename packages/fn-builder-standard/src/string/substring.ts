import {addDynamic} from "fn-builder";
import substring, {FunctionType} from "./functions/substring";

addDynamic("substring", substring);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        substring: FunctionType
    }
}

export default substring;
