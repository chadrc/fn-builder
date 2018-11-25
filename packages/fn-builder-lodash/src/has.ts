import * as FnBuilder from "fn-builder";
import has, {FunctionType} from "./functions/has";

FnBuilder.addDynamic("has", has);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        has: FunctionType
    }
}

export default has;
