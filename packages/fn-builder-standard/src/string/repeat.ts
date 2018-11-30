import {addDynamic} from "fn-builder";
import repeat, {FunctionType} from "./functions/repeat";

addDynamic("repeat", repeat);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        repeat: FunctionType
    }
}

export default repeat;
