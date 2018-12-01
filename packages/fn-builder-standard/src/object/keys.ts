import {addDynamic} from "fn-builder";
import keys, {FunctionType} from "./functions/keys";

addDynamic("keys", keys);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        keys: FunctionType
    }
}

export default keys;
