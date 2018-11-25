import * as FnBuilder from "fn-builder";
import bindKey, {FunctionType} from "./functions/bindKey";

FnBuilder.addDynamic("bindKey", bindKey);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        bindKey: FunctionType
    }
}

export default bindKey;
