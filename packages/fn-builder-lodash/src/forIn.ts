import * as FnBuilder from "fn-builder";
import forIn, {FunctionType} from "./functions/forIn";

FnBuilder.addDynamic("forIn", forIn);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        forIn: FunctionType
    }
}

export default forIn;
