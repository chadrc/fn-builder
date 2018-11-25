import * as FnBuilder from "fn-builder";
import isWeakMap, {FunctionType} from "./functions/isWeakMap";

FnBuilder.addDynamic("isWeakMap", isWeakMap);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        isWeakMap: FunctionType
    }
}

export default isWeakMap;
