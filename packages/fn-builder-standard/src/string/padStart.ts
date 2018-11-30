import {addDynamic} from "fn-builder";
import padStart, {FunctionType} from "./functions/padStart";

addDynamic("padStart", padStart);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        padStart: FunctionType
    }
}

export default padStart;
