import * as FnBuilder from "fn-builder";
import curryRight, {FunctionType} from "./functions/curryRight";

FnBuilder.addDynamic("curryRight", curryRight);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        curryRight: FunctionType
    }
}

export default curryRight;
