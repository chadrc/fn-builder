import * as FnBuilder from "fn-builder";
import partialRight, {FunctionType} from "./functions/partialRight";

FnBuilder.addDynamic("partialRight", partialRight);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        partialRight: FunctionType
    }
}

export default partialRight;
