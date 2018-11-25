import * as FnBuilder from "fn-builder";
import findKey, {FunctionType} from "./functions/findKey";

FnBuilder.addDynamic("findKey", findKey);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        findKey: FunctionType
    }
}

export default findKey;
