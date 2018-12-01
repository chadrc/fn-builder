import {addDynamic} from "fn-builder";
import isFinite, {FunctionType} from "./functions/isFinite";

addDynamic("isFinite", isFinite);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        isFinite: FunctionType
    }
}

export default isFinite;
