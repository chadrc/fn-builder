import * as FnBuilder from "fn-builder";
import pullAllWith, {FunctionType} from "./functions/pullAllWith";

FnBuilder.addDynamic("pullAllWith", pullAllWith);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        pullAllWith: FunctionType
    }
}

export default pullAllWith;
