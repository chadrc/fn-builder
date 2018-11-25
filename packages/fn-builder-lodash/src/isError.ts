import * as FnBuilder from "fn-builder";
import isError, {FunctionType} from "./functions/isError";

FnBuilder.addDynamic("isError", isError);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        isError: FunctionType
    }
}

export default isError;
