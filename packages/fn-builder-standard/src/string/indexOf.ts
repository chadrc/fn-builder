import {addDynamic} from "fn-builder";
import indexOf, {FunctionType} from "./functions/indexOf";

addDynamic("indexOf", indexOf);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        indexOf: FunctionType
    }
}

export default indexOf;
