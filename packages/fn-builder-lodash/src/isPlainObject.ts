import * as FnBuilder from "fn-builder";
import isPlainObject, {FunctionType} from "./functions/isPlainObject";

FnBuilder.addDynamic("isPlainObject", isPlainObject);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        isPlainObject: FunctionType
    }
}

export default isPlainObject;
