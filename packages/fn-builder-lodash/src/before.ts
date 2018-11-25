import * as FnBuilder from "fn-builder";
import before, {FunctionType} from "./functions/before";

FnBuilder.addDynamic("before", before);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        before: FunctionType
    }
}

export default before;
