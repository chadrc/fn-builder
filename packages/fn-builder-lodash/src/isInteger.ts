import * as FnBuilder from "fn-builder";
import isInteger, {FunctionType} from "./functions/isInteger";

FnBuilder.addDynamic("isInteger", isInteger);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        isInteger: FunctionType
    }
}

export default isInteger;
