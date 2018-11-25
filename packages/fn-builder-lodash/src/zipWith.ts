import * as FnBuilder from "fn-builder";
import zipWith, {FunctionType} from "./functions/zipWith";

FnBuilder.addDynamic("zipWith", zipWith);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        zipWith: FunctionType
    }
}

export default zipWith;
