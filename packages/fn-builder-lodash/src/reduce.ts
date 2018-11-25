import * as FnBuilder from "fn-builder";
import reduce, {FunctionType} from "./functions/reduce";

FnBuilder.addDynamic("reduce", reduce);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        reduce: FunctionType
    }
}

export default reduce;
