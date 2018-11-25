import * as FnBuilder from "fn-builder";
import toInteger, {FunctionType} from "./functions/toInteger";

FnBuilder.addDynamic("toInteger", toInteger);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        toInteger: FunctionType
    }
}

export default toInteger;
