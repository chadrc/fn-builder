import * as FnBuilder from "fn-builder";
import isMatch, {FunctionType} from "./functions/isMatch";

FnBuilder.addDynamic("isMatch", isMatch);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        isMatch: FunctionType
    }
}

export default isMatch;
