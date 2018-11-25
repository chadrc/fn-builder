import * as FnBuilder from "fn-builder";
import isNative, {FunctionType} from "./functions/isNative";

FnBuilder.addDynamic("isNative", isNative);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        isNative: FunctionType
    }
}

export default isNative;
