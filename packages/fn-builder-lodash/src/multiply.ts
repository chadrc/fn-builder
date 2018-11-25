import * as FnBuilder from "fn-builder";
import multiply, {FunctionType} from "./functions/multiply";

FnBuilder.addDynamic("multiply", multiply);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        multiply: FunctionType
    }
}

export default multiply;
