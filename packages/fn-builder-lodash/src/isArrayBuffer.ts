import * as FnBuilder from "fn-builder";
import isArrayBuffer, {FunctionType} from "./functions/isArrayBuffer";

FnBuilder.addDynamic("isArrayBuffer", isArrayBuffer);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        isArrayBuffer: FunctionType
    }
}

export default isArrayBuffer;
