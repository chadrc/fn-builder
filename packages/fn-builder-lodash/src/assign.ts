import * as FnBuilder from "fn-builder";
import assign, {FunctionType} from "./functions/assign";

FnBuilder.addDynamic("assign", assign);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        assign: FunctionType
    }
}

export default assign;
