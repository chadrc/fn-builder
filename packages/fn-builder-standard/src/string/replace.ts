import {addDynamic} from "fn-builder";
import replace, {FunctionType} from "./functions/replace";

addDynamic("replace", replace);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        replace: FunctionType
    }
}

export default replace;
