import * as FnBuilder from "fn-builder";
import times, {FunctionType} from "./functions/times";

FnBuilder.addDynamic("times", times);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        times: FunctionType
    }
}

export default times;
