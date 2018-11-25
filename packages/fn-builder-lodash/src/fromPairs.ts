import * as FnBuilder from "fn-builder";
import fromPairs, {FunctionType} from "./functions/fromPairs";

FnBuilder.addDynamic("fromPairs", fromPairs);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        fromPairs: FunctionType
    }
}

export default fromPairs;
