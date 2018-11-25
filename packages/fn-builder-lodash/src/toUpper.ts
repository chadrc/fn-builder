import * as FnBuilder from "fn-builder";
import toUpper, {FunctionType} from "./functions/toUpper";

FnBuilder.addDynamic("toUpper", toUpper);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        toUpper: FunctionType
    }
}

export default toUpper;
