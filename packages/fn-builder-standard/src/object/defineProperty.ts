import {addDynamic} from "fn-builder";
import defineProperty, {FunctionType} from "./functions/defineProperty";

addDynamic("defineProperty", defineProperty);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        defineProperty: FunctionType
    }
}

export default defineProperty;
