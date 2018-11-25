import * as FnBuilder from "fn-builder";
import forInRight, {FunctionType} from "./functions/forInRight";

FnBuilder.addDynamic("forInRight", forInRight);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        forInRight: FunctionType
    }
}

export default forInRight;
