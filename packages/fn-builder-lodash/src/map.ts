import * as FnBuilder from "fn-builder";
import map, {FunctionType} from "./functions/map";

FnBuilder.addDynamic("map", map);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        map: FunctionType
    }
}

export default map;
