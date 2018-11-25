import * as FnBuilder from "fn-builder";
import last, {FunctionType} from "./functions/last";

FnBuilder.addDynamic("last", last);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        last: FunctionType
    }
}

export default last;
