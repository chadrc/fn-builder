import * as FnBuilder from "fn-builder";
import delay, {FunctionType} from "./functions/delay";

FnBuilder.addDynamic("delay", delay);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        delay: FunctionType
    }
}

export default delay;
