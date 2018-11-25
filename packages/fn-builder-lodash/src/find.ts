import * as FnBuilder from "fn-builder";
import find, {FunctionType} from "./functions/find";

FnBuilder.addDynamic("find", find);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        find: FunctionType
    }
}

export default find;
