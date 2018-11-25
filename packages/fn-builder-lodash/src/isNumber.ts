import * as FnBuilder from "fn-builder";
import isNumber, {FunctionType} from "./functions/isNumber";

FnBuilder.addDynamic("isNumber", isNumber);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        isNumber: FunctionType
    }
}

export default isNumber;
