import * as FnBuilder from "fn-builder";
import pullAllBy, {FunctionType} from "./functions/pullAllBy";

FnBuilder.addDynamic("pullAllBy", pullAllBy);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        pullAllBy: FunctionType
    }
}

export default pullAllBy;
