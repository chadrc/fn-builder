import * as FnBuilder from "fn-builder";
import max, {FunctionType} from "./functions/max";

FnBuilder.addDynamic("max", max);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        max: FunctionType
    }
}

export default max;
