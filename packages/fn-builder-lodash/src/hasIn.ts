import * as FnBuilder from "fn-builder";
import hasIn, {FunctionType} from "./functions/hasIn";

FnBuilder.addDynamic("hasIn", hasIn);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        hasIn: FunctionType
    }
}

export default hasIn;
