import * as FnBuilder from "fn-builder";
import round, {FunctionType} from "./functions/round";

FnBuilder.addDynamic("round", round);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        round: FunctionType
    }
}

export default round;
