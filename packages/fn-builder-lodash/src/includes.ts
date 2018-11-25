import * as FnBuilder from "fn-builder";
import includes, {FunctionType} from "./functions/includes";

FnBuilder.addDynamic("includes", includes);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        includes: FunctionType
    }
}

export default includes;
