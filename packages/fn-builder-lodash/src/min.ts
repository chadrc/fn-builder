import * as FnBuilder from "fn-builder";
import min, {FunctionType} from "./functions/min";

FnBuilder.addDynamic("min", min);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        min: FunctionType
    }
}

export default min;
