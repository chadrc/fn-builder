import * as FnBuilder from "fn-builder";
import unescape, {FunctionType} from "./functions/unescape";

FnBuilder.addDynamic("unescape", unescape);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        unescape: FunctionType
    }
}

export default unescape;
