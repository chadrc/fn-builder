import * as FnBuilder from "fn-builder";
import isDate, {FunctionType} from "./functions/isDate";

FnBuilder.addDynamic("isDate", isDate);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        isDate: FunctionType
    }
}

export default isDate;
