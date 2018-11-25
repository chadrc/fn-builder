import * as FnBuilder from "fn-builder";
import isString, {FunctionType} from "./functions/isString";

FnBuilder.addDynamic("isString", isString);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        isString: FunctionType
    }
}

export default isString;
