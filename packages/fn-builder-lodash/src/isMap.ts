import * as FnBuilder from "fn-builder";
import isMap, {FunctionType} from "./functions/isMap";

FnBuilder.addDynamic("isMap", isMap);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        isMap: FunctionType
    }
}

export default isMap;
