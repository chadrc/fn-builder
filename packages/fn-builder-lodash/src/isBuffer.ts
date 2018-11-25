import * as FnBuilder from "fn-builder";
import isBuffer, {FunctionType} from "./functions/isBuffer";

FnBuilder.addDynamic("isBuffer", isBuffer);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        isBuffer: FunctionType
    }
}

export default isBuffer;
