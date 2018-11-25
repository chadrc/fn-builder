import * as FnBuilder from "fn-builder";
import inRange, {FunctionType} from "./functions/inRange";

FnBuilder.addDynamic("inRange", inRange);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        inRange: FunctionType
    }
}

export default inRange;
