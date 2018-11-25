import * as FnBuilder from "fn-builder";
import toPairs, {FunctionType} from "./functions/toPairs";

FnBuilder.addDynamic("toPairs", toPairs);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        toPairs: FunctionType
    }
}

export default toPairs;
