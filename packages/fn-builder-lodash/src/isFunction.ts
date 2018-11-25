import * as FnBuilder from "fn-builder";
import isFunction, {FunctionType} from "./functions/isFunction";

FnBuilder.addDynamic("isFunction", isFunction);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        isFunction: FunctionType
    }
}

export default isFunction;
