import * as FnBuilder from "fn-builder";
import isUndefined, {FunctionType} from "./functions/isUndefined";

FnBuilder.addDynamic("isUndefined", isUndefined);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        isUndefined: FunctionType
    }
}

export default isUndefined;
