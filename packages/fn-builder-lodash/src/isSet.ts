import * as FnBuilder from "fn-builder";
import isSet, {FunctionType} from "./functions/isSet";

FnBuilder.addDynamic("isSet", isSet);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        isSet: FunctionType
    }
}

export default isSet;
