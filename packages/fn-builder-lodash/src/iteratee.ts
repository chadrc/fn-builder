import * as FnBuilder from "fn-builder";
import iteratee, {FunctionType} from "./functions/iteratee";

FnBuilder.addDynamic("iteratee", iteratee);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        iteratee: FunctionType
    }
}

export default iteratee;
