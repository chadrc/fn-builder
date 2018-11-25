import * as FnBuilder from "fn-builder";
import toLength, {FunctionType} from "./functions/toLength";

FnBuilder.addDynamic("toLength", toLength);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        toLength: FunctionType
    }
}

export default toLength;
