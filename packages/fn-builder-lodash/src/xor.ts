import * as FnBuilder from "fn-builder";
import xor, {FunctionType} from "./functions/xor";

FnBuilder.addDynamic("xor", xor);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        xor: FunctionType
    }
}

export default xor;
