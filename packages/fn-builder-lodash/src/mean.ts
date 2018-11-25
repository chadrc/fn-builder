import * as FnBuilder from "fn-builder";
import mean, {FunctionType} from "./functions/mean";

FnBuilder.addDynamic("mean", mean);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        mean: FunctionType
    }
}

export default mean;
