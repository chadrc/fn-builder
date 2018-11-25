import * as FnBuilder from "fn-builder";
import remove, {FunctionType} from "./functions/remove";

FnBuilder.addDynamic("remove", remove);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        remove: FunctionType
    }
}

export default remove;
