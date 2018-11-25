import * as FnBuilder from "fn-builder";
import after, {FunctionType} from "./functions/after";

FnBuilder.addDynamic("after", after);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        after: FunctionType
    }
}

export default after;
