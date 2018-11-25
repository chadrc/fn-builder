import * as FnBuilder from "fn-builder";
import endsWith, {FunctionType} from "./functions/endsWith";

FnBuilder.addDynamic("endsWith", endsWith);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        endsWith: FunctionType
    }
}

export default endsWith;
