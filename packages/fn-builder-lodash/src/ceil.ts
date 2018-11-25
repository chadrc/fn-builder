import * as FnBuilder from "fn-builder";
import ceil, {FunctionType} from "./functions/ceil";

FnBuilder.addDynamic("ceil", ceil);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        ceil: FunctionType
    }
}

export default ceil;
