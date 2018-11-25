import * as FnBuilder from "fn-builder";
import lt, {FunctionType} from "./functions/lt";

FnBuilder.addDynamic("lt", lt);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        lt: FunctionType
    }
}

export default lt;
