import {addDynamic} from "fn-builder";
import padEnd, {FunctionType} from "./functions/padEnd";

addDynamic("padEnd", padEnd);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        padEnd: FunctionType
    }
}

export default padEnd;
