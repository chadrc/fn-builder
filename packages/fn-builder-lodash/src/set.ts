import * as FnBuilder from "fn-builder";
import set, {FunctionType} from "./functions/set";

FnBuilder.addDynamic("set", set);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        set: FunctionType
    }
}

export default set;
