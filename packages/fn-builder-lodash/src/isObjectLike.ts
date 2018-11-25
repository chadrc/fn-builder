import * as FnBuilder from "fn-builder";
import isObjectLike, {FunctionType} from "./functions/isObjectLike";

FnBuilder.addDynamic("isObjectLike", isObjectLike);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        isObjectLike: FunctionType
    }
}

export default isObjectLike;
