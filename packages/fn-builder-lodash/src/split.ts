import * as FnBuilder from "fn-builder";
import split, {FunctionType} from "./functions/split";

FnBuilder.addDynamic("split", split);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        split: FunctionType
    }
}

export default split;
