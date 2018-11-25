import * as FnBuilder from "fn-builder";
import merge, {FunctionType} from "./functions/merge";

FnBuilder.addDynamic("merge", merge);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        merge: FunctionType
    }
}

export default merge;
