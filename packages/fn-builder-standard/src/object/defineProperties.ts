import {addDynamic} from "fn-builder";
import defineProperties, {FunctionType} from "./functions/defineProperties";

addDynamic("defineProperties", defineProperties);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        defineProperties: FunctionType
    }
}

export default defineProperties;
