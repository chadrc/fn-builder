import * as FnBuilder from "fn-builder";
import findLastKey, {FunctionType} from "./functions/findLastKey";

FnBuilder.addDynamic("findLastKey", findLastKey);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        findLastKey: FunctionType
    }
}

export default findLastKey;
