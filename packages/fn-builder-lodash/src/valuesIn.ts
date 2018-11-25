import * as FnBuilder from "fn-builder";
import valuesIn, {FunctionType} from "./functions/valuesIn";

FnBuilder.addDynamic("valuesIn", valuesIn);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        valuesIn: FunctionType
    }
}

export default valuesIn;
