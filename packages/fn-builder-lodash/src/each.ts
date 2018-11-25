import * as FnBuilder from "fn-builder";
import each, {FunctionType} from "./functions/each";

FnBuilder.addDynamic("each", each);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        each: FunctionType
    }
}

export default each;
