import * as FnBuilder from "fn-builder";
import intersection, {FunctionType} from "./functions/intersection";

FnBuilder.addDynamic("intersection", intersection);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        intersection: FunctionType
    }
}

export default intersection;
