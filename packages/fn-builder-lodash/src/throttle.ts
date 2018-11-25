import * as FnBuilder from "fn-builder";
import throttle, {FunctionType} from "./functions/throttle";

FnBuilder.addDynamic("throttle", throttle);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        throttle: FunctionType
    }
}

export default throttle;
