import * as FnBuilder from "fn-builder";
import negate, {FunctionType} from "./functions/negate";

FnBuilder.addDynamic("negate", negate);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        negate: FunctionType
    }
}

export default negate;
