import * as FnBuilder from "fn-builder";
import stubFalse, {FunctionType} from "./functions/stubFalse";

FnBuilder.addDynamic("stubFalse", stubFalse);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        stubFalse: FunctionType
    }
}

export default stubFalse;
