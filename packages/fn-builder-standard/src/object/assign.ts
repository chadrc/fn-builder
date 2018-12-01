import {addDynamic} from "fn-builder";
import assign, {FunctionType} from "./functions/assign";

addDynamic("assign", assign);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        assign: FunctionType
    }
}

export default assign;
