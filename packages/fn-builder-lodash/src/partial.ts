import * as FnBuilder from "fn-builder";
import partial, {FunctionType} from "./functions/partial";

FnBuilder.addDynamic("partial", partial);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        partial: FunctionType
    }
}

export default partial;
