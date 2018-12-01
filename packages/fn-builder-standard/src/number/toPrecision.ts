import {addDynamic} from "fn-builder";
import toPrecision, {FunctionType} from "./functions/toPrecision";

addDynamic("toPrecision", toPrecision);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        toPrecision: FunctionType
    }
}

export default toPrecision;
