import * as FnBuilder from "fn-builder";
import thru, {FunctionType} from "./functions/thru";

FnBuilder.addDynamic("thru", thru);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        thru: FunctionType
    }
}

export default thru;
