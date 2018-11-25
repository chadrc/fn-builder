import * as FnBuilder from "fn-builder";
import update, {FunctionType} from "./functions/update";

FnBuilder.addDynamic("update", update);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        update: FunctionType
    }
}

export default update;
