import * as FnBuilder from "fn-builder";
import toSafeInteger, {FunctionType} from "./functions/toSafeInteger";

FnBuilder.addDynamic("toSafeInteger", toSafeInteger);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        toSafeInteger: FunctionType
    }
}

export default toSafeInteger;
