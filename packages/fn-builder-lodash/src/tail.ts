import * as FnBuilder from "fn-builder";
import tail, {FunctionType} from "./functions/tail";

FnBuilder.addDynamic("tail", tail);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        tail: FunctionType
    }
}

export default tail;
