import * as FnBuilder from "fn-builder";
import isNaN, {FunctionType} from "./functions/isNaN";

FnBuilder.addDynamic("isNaN", isNaN);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        isNaN: FunctionType
    }
}

export default isNaN;
