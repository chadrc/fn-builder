import * as FnBuilder from "fn-builder";
import uniq, {FunctionType} from "./functions/uniq";

FnBuilder.addDynamic("uniq", uniq);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        uniq: FunctionType
    }
}

export default uniq;
