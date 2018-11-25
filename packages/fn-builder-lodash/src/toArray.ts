import * as FnBuilder from "fn-builder";
import toArray, {FunctionType} from "./functions/toArray";

FnBuilder.addDynamic("toArray", toArray);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        toArray: FunctionType
    }
}

export default toArray;
