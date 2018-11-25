import * as FnBuilder from "fn-builder";
import method, {FunctionType} from "./functions/method";

FnBuilder.addDynamic("method", method);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        method: FunctionType
    }
}

export default method;
