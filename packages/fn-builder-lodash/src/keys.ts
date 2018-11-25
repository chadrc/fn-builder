import * as FnBuilder from "fn-builder";
import keys, {FunctionType} from "./functions/keys";

FnBuilder.addDynamic("keys", keys);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        keys: FunctionType
    }
}

export default keys;
