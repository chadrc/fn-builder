import * as FnBuilder from "fn-builder";
import replace, {FunctionType} from "./functions/replace";

FnBuilder.addDynamic("replace", replace);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        replace: FunctionType
    }
}

export default replace;
