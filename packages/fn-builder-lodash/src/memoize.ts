import * as FnBuilder from "fn-builder";
import memoize, {FunctionType} from "./functions/memoize";

FnBuilder.addDynamic("memoize", memoize);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        memoize: FunctionType
    }
}

export default memoize;
