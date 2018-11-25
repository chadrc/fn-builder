import * as FnBuilder from "fn-builder";
import functionsIn, {FunctionType} from "./functions/functionsIn";

FnBuilder.addDynamic("functionsIn", functionsIn);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        functionsIn: FunctionType
    }
}

export default functionsIn;
