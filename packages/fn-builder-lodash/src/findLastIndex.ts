import * as FnBuilder from "fn-builder";
import findLastIndex, {FunctionType} from "./functions/findLastIndex";

FnBuilder.addDynamic("findLastIndex", findLastIndex);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        findLastIndex: FunctionType
    }
}

export default findLastIndex;
