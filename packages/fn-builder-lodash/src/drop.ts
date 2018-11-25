import * as FnBuilder from "fn-builder";
import drop, {FunctionType} from "./functions/drop";

FnBuilder.addDynamic("drop", drop);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        drop: FunctionType
    }
}

export default drop;
