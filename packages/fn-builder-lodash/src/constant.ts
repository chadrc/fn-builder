import * as FnBuilder from "fn-builder";
import constant, {FunctionType} from "./functions/constant";

FnBuilder.addDynamic("constant", constant);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        constant: FunctionType
    }
}

export default constant;
