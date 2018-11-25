import * as FnBuilder from "fn-builder";
import pullAll, {FunctionType} from "./functions/pullAll";

FnBuilder.addDynamic("pullAll", pullAll);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        pullAll: FunctionType
    }
}

export default pullAll;
