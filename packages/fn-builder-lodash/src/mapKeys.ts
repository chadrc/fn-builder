import * as FnBuilder from "fn-builder";
import mapKeys, {FunctionType} from "./functions/mapKeys";

FnBuilder.addDynamic("mapKeys", mapKeys);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        mapKeys: FunctionType
    }
}

export default mapKeys;
