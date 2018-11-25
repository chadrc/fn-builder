import * as FnBuilder from "fn-builder";
import result, {FunctionType} from "./functions/result";

FnBuilder.addDynamic("result", result);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        result: FunctionType
    }
}

export default result;
