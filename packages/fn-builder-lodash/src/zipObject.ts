import * as FnBuilder from "fn-builder";
import zipObject, {FunctionType} from "./functions/zipObject";

FnBuilder.addDynamic("zipObject", zipObject);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        zipObject: FunctionType
    }
}

export default zipObject;
