import * as FnBuilder from "fn-builder";
import forEachRight, {FunctionType} from "./functions/forEachRight";

FnBuilder.addDynamic("forEachRight", forEachRight);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        forEachRight: FunctionType
    }
}

export default forEachRight;
