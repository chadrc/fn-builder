import * as FnBuilder from "fn-builder";
import isBoolean, {FunctionType} from "./functions/isBoolean";

FnBuilder.addDynamic("isBoolean", isBoolean);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        isBoolean: FunctionType
    }
}

export default isBoolean;
