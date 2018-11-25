import * as FnBuilder from "fn-builder";
import clamp, {FunctionType} from "./functions/clamp";

FnBuilder.addDynamic("clamp", clamp);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        clamp: FunctionType
    }
}

export default clamp;
