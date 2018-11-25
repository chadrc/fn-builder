import * as FnBuilder from "fn-builder";
import uniqWith, {FunctionType} from "./functions/uniqWith";

FnBuilder.addDynamic("uniqWith", uniqWith);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        uniqWith: FunctionType
    }
}

export default uniqWith;
