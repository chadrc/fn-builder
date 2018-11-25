import * as FnBuilder from "fn-builder";
import isArray, {FunctionType} from "./functions/isArray";

FnBuilder.addDynamic("isArray", isArray);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        isArray: FunctionType
    }
}

export default isArray;
