import {addDynamic} from "fn-builder";
import match, {FunctionType} from "./functions/match";

addDynamic("match", match);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        match: FunctionType
    }
}

export default match;