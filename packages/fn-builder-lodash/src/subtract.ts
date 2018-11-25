import * as FnBuilder from "fn-builder";
import subtract, {FunctionType} from "./functions/subtract";

FnBuilder.addDynamic("subtract", subtract);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        subtract: FunctionType
    }
}

export default subtract;
