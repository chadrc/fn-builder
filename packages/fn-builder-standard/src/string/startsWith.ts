import {addDynamic} from "fn-builder";
import startsWith, {FunctionType} from "./functions/startsWith";

addDynamic("startsWith", startsWith);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        startsWith: FunctionType
    }
}

export default startsWith;
