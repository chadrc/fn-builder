import * as FnBuilder from "fn-builder";
import unzipWith, {FunctionType} from "./functions/unzipWith";

FnBuilder.addDynamic("unzipWith", unzipWith);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        unzipWith: FunctionType
    }
}

export default unzipWith;
