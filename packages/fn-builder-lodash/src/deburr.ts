import * as FnBuilder from "fn-builder";
import deburr, {FunctionType} from "./functions/deburr";

FnBuilder.addDynamic("deburr", deburr);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        deburr: FunctionType
    }
}

export default deburr;
