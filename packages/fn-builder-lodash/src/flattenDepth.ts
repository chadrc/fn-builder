import * as FnBuilder from "fn-builder";
import flattenDepth, {FunctionType} from "./functions/flattenDepth";

FnBuilder.addDynamic("flattenDepth", flattenDepth);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        flattenDepth: FunctionType
    }
}

export default flattenDepth;
