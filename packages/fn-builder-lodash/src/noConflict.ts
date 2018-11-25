import * as FnBuilder from "fn-builder";
import noConflict, {FunctionType} from "./functions/noConflict";

FnBuilder.addDynamic("noConflict", noConflict);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        noConflict: FunctionType
    }
}

export default noConflict;
