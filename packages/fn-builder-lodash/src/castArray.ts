import * as FnBuilder from "fn-builder";
import castArray, {FunctionType} from "./functions/castArray";

FnBuilder.addDynamic("castArray", castArray);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        castArray: FunctionType
    }
}

export default castArray;
