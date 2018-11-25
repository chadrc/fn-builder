import * as FnBuilder from "fn-builder";
import xorBy, {FunctionType} from "./functions/xorBy";

FnBuilder.addDynamic("xorBy", xorBy);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        xorBy: FunctionType
    }
}

export default xorBy;
