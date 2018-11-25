import * as FnBuilder from "fn-builder";
import findIndex, {FunctionType} from "./functions/findIndex";

FnBuilder.addDynamic("findIndex", findIndex);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        findIndex: FunctionType
    }
}

export default findIndex;
