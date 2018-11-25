import * as FnBuilder from "fn-builder";
import isNull, {FunctionType} from "./functions/isNull";

FnBuilder.addDynamic("isNull", isNull);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        isNull: FunctionType
    }
}

export default isNull;
