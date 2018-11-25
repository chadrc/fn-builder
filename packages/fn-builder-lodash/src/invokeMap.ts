import * as FnBuilder from "fn-builder";
import invokeMap, {FunctionType} from "./functions/invokeMap";

FnBuilder.addDynamic("invokeMap", invokeMap);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        invokeMap: FunctionType
    }
}

export default invokeMap;
