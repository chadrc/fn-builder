import * as FnBuilder from "fn-builder";
import flatMap, {FunctionType} from "./functions/flatMap";

FnBuilder.addDynamic("flatMap", flatMap);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        flatMap: FunctionType
    }
}

export default flatMap;
