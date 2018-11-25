import * as FnBuilder from "fn-builder";
import attempt, {FunctionType} from "./functions/attempt";

FnBuilder.addDynamic("attempt", attempt);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        attempt: FunctionType
    }
}

export default attempt;
