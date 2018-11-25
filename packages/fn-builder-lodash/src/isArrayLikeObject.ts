import * as FnBuilder from "fn-builder";
import isArrayLikeObject, {FunctionType} from "./functions/isArrayLikeObject";

FnBuilder.addDynamic("isArrayLikeObject", isArrayLikeObject);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        isArrayLikeObject: FunctionType
    }
}

export default isArrayLikeObject;
