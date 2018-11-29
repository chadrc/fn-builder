import {addDynamic} from "fn-builder";
import includes, {FunctionType} from "./functions/includes";

addDynamic("includes", includes);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        includes: FunctionType
    }
}

export default includes;
