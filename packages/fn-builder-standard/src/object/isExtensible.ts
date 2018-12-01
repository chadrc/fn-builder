import {addDynamic} from "fn-builder";
import isExtensible, {FunctionType} from "./functions/isExtensible";

addDynamic("isExtensible", isExtensible);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        isExtensible: FunctionType
    }
}

export default isExtensible;
