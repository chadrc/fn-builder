import * as FnBuilder from "fn-builder";
import concat, {FunctionType} from "./functions/concat";

FnBuilder.addDynamic("concat", concat);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        concat: FunctionType
    }
}

export default concat;
