import * as FnBuilder from "fn-builder";
import isSafeInteger, {FunctionType} from "./functions/isSafeInteger";

FnBuilder.addDynamic("isSafeInteger", isSafeInteger);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        isSafeInteger: FunctionType
    }
}

export default isSafeInteger;
