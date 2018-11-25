import * as FnBuilder from "fn-builder";
import isNil, {FunctionType} from "./functions/isNil";

FnBuilder.addDynamic("isNil", isNil);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        isNil: FunctionType
    }
}

export default isNil;
