import * as FnBuilder from "fn-builder";
import flatten, {FunctionType} from "./functions/flatten";

FnBuilder.addDynamic("flatten", flatten);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        flatten: FunctionType
    }
}

export default flatten;
