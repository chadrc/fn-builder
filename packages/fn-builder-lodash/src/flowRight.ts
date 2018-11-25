import * as FnBuilder from "fn-builder";
import flowRight, {FunctionType} from "./functions/flowRight";

FnBuilder.addDynamic("flowRight", flowRight);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        flowRight: FunctionType
    }
}

export default flowRight;
