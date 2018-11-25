import * as FnBuilder from "fn-builder";
import isTypedArray, {FunctionType} from "./functions/isTypedArray";

FnBuilder.addDynamic("isTypedArray", isTypedArray);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        isTypedArray: FunctionType
    }
}

export default isTypedArray;
