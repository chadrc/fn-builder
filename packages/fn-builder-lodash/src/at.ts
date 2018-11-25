import * as FnBuilder from "fn-builder";
import at, {FunctionType} from "./functions/at";

FnBuilder.addDynamic("at", at);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        at: FunctionType
    }
}

export default at;
