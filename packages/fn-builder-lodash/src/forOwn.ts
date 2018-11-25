import * as FnBuilder from "fn-builder";
import forOwn, {FunctionType} from "./functions/forOwn";

FnBuilder.addDynamic("forOwn", forOwn);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        forOwn: FunctionType
    }
}

export default forOwn;
