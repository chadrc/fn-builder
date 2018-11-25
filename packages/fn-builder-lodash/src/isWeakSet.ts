import * as FnBuilder from "fn-builder";
import isWeakSet, {FunctionType} from "./functions/isWeakSet";

FnBuilder.addDynamic("isWeakSet", isWeakSet);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        isWeakSet: FunctionType
    }
}

export default isWeakSet;
