import * as FnBuilder from "fn-builder";
import unary, {FunctionType} from "./functions/unary";

FnBuilder.addDynamic("unary", unary);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        unary: FunctionType
    }
}

export default unary;
