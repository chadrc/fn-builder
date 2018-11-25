import * as FnBuilder from "fn-builder";
import takeRightWhile, {FunctionType} from "./functions/takeRightWhile";

FnBuilder.addDynamic("takeRightWhile", takeRightWhile);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        takeRightWhile: FunctionType
    }
}

export default takeRightWhile;
