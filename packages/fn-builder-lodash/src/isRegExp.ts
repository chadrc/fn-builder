import * as FnBuilder from "fn-builder";
import isRegExp, {FunctionType} from "./functions/isRegExp";

FnBuilder.addDynamic("isRegExp", isRegExp);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        isRegExp: FunctionType
    }
}

export default isRegExp;
