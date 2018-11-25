import * as FnBuilder from "fn-builder";
import toPlainObject, {FunctionType} from "./functions/toPlainObject";

FnBuilder.addDynamic("toPlainObject", toPlainObject);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        toPlainObject: FunctionType
    }
}

export default toPlainObject;
