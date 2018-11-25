import * as FnBuilder from "fn-builder";
import isArrayLike, {FunctionType} from "./functions/isArrayLike";

FnBuilder.addDynamic("isArrayLike", isArrayLike);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        isArrayLike: FunctionType
    }
}

export default isArrayLike;
