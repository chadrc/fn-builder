import * as FnBuilder from "fn-builder";
import isLength, {FunctionType} from "./functions/isLength";

FnBuilder.addDynamic("isLength", isLength);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        isLength: FunctionType
    }
}

export default isLength;
