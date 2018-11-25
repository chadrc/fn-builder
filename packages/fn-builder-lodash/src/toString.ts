import * as FnBuilder from "fn-builder";
import toString, {FunctionType} from "./functions/toString";

FnBuilder.addDynamic("toString", toString);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        toString: FunctionType
    }
}

export default toString;
