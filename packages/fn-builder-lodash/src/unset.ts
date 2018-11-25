import * as FnBuilder from "fn-builder";
import unset, {FunctionType} from "./functions/unset";

FnBuilder.addDynamic("unset", unset);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        unset: FunctionType
    }
}

export default unset;
