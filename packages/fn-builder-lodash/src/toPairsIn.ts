import * as FnBuilder from "fn-builder";
import toPairsIn, {FunctionType} from "./functions/toPairsIn";

FnBuilder.addDynamic("toPairsIn", toPairsIn);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        toPairsIn: FunctionType
    }
}

export default toPairsIn;
