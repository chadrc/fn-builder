import * as FnBuilder from "fn-builder";
import cond, {FunctionType} from "./functions/cond";

FnBuilder.addDynamic("cond", cond);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        cond: FunctionType
    }
}

export default cond;
