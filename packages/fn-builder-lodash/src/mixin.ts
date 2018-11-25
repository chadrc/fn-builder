import * as FnBuilder from "fn-builder";
import mixin, {FunctionType} from "./functions/mixin";

FnBuilder.addDynamic("mixin", mixin);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        mixin: FunctionType
    }
}

export default mixin;
