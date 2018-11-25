import * as FnBuilder from "fn-builder";
import property, {FunctionType} from "./functions/property";

FnBuilder.addDynamic("property", property);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        property: FunctionType
    }
}

export default property;
