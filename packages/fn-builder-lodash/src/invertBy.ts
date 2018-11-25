import * as FnBuilder from "fn-builder";
import invertBy, {FunctionType} from "./functions/invertBy";

FnBuilder.addDynamic("invertBy", invertBy);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        invertBy: FunctionType
    }
}

export default invertBy;
