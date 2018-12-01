import {addDynamic} from "fn-builder";
import isSealed, {FunctionType} from "./functions/isSealed";

addDynamic("isSealed", isSealed);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        isSealed: FunctionType
    }
}

export default isSealed;
