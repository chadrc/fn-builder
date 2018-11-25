import * as FnBuilder from "fn-builder";
import get, {FunctionType} from "./functions/get";

FnBuilder.addDynamic("get", get);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        get: FunctionType
    }
}

export default get;
