import {addDynamic} from "fn-builder";
import isFrozen, {FunctionType} from "./functions/isFrozen";

addDynamic("isFrozen", isFrozen);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        isFrozen: FunctionType
    }
}

export default isFrozen;
