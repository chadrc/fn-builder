import * as FnBuilder from "fn-builder";
import isEqual, {FunctionType} from "./functions/isEqual";

FnBuilder.addDynamic("isEqual", isEqual);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        isEqual: FunctionType
    }
}

export default isEqual;
