import * as FnBuilder from "fn-builder";
import escape, {FunctionType} from "./functions/escape";

FnBuilder.addDynamic("escape", escape);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        escape: FunctionType
    }
}

export default escape;
