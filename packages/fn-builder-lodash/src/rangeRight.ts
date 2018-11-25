import * as FnBuilder from "fn-builder";
import rangeRight, {FunctionType} from "./functions/rangeRight";

FnBuilder.addDynamic("rangeRight", rangeRight);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        rangeRight: FunctionType
    }
}

export default rangeRight;
