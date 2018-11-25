import * as FnBuilder from "fn-builder";
import clone, {FunctionType} from "./functions/clone";

FnBuilder.addDynamic("clone", clone);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        clone: FunctionType
    }
}

export default clone;
