import {addDynamic} from "fn-builder";
import toString, {FunctionType} from "./functions/toString";

addDynamic("toString", toString);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        toString: FunctionType
    }
}

export default toString;
