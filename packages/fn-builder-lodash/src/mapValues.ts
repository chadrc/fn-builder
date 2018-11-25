import * as FnBuilder from "fn-builder";
import mapValues, {FunctionType} from "./functions/mapValues";

FnBuilder.addDynamic("mapValues", mapValues);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        mapValues: FunctionType
    }
}

export default mapValues;
