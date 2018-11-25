import * as FnBuilder from "fn-builder";
import isObject, {FunctionType} from "./functions/isObject";

FnBuilder.addDynamic("isObject", isObject);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        isObject: FunctionType
    }
}

export default isObject;
