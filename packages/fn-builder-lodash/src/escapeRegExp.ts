import * as FnBuilder from "fn-builder";
import escapeRegExp, {FunctionType} from "./functions/escapeRegExp";

FnBuilder.addDynamic("escapeRegExp", escapeRegExp);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        escapeRegExp: FunctionType
    }
}

export default escapeRegExp;
