import * as FnBuilder from "fn-builder";
import values, {FunctionType} from "./functions/values";

FnBuilder.addDynamic("values", values);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        values: FunctionType
    }
}

export default values;
