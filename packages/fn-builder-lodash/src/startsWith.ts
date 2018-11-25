import * as FnBuilder from "fn-builder";
import startsWith, {FunctionType} from "./functions/startsWith";

FnBuilder.addDynamic("startsWith", startsWith);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        startsWith: FunctionType
    }
}

export default startsWith;
