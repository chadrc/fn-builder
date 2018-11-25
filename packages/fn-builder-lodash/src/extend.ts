import * as FnBuilder from "fn-builder";
import extend, {FunctionType} from "./functions/extend";

FnBuilder.addDynamic("extend", extend);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        extend: FunctionType
    }
}

export default extend;
