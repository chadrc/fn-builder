import * as FnBuilder from "fn-builder";
import stubArray, {FunctionType} from "./functions/stubArray";

FnBuilder.addDynamic("stubArray", stubArray);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        stubArray: FunctionType
    }
}

export default stubArray;
