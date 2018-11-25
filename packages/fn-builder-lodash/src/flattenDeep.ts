import * as FnBuilder from "fn-builder";
import flattenDeep, {FunctionType} from "./functions/flattenDeep";

FnBuilder.addDynamic("flattenDeep", flattenDeep);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        flattenDeep: FunctionType
    }
}

export default flattenDeep;
