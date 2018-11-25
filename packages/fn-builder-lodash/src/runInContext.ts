import * as FnBuilder from "fn-builder";
import runInContext, {FunctionType} from "./functions/runInContext";

FnBuilder.addDynamic("runInContext", runInContext);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        runInContext: FunctionType
    }
}

export default runInContext;
