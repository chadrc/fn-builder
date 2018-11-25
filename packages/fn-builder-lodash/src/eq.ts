import * as FnBuilder from "fn-builder";
import eq, {FunctionType} from "./functions/eq";

FnBuilder.addDynamic("eq", eq);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        eq: FunctionType
    }
}

export default eq;
