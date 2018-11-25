import * as FnBuilder from "fn-builder";
import forOwnRight, {FunctionType} from "./functions/forOwnRight";

FnBuilder.addDynamic("forOwnRight", forOwnRight);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        forOwnRight: FunctionType
    }
}

export default forOwnRight;
