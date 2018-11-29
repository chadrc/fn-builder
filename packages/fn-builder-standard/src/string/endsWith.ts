import {addDynamic} from "fn-builder";
import endsWith, {FunctionType} from "./functions/endsWith";

addDynamic("endsWith", endsWith);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        endsWith: FunctionType
    }
}

export default endsWith;
