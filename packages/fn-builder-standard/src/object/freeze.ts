import {addDynamic} from "fn-builder";
import freeze, {FunctionType} from "./functions/freeze";

addDynamic("freeze", freeze);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        freeze: FunctionType
    }
}

export default freeze;
