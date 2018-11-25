import * as FnBuilder from "fn-builder";
import defaults, {FunctionType} from "./functions/defaults";

FnBuilder.addDynamic("defaults", defaults);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        defaults: FunctionType
    }
}

export default defaults;
