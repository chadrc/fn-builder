import * as FnBuilder from "fn-builder";
import defer, {FunctionType} from "./functions/defer";

FnBuilder.addDynamic("defer", defer);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        defer: FunctionType
    }
}

export default defer;
