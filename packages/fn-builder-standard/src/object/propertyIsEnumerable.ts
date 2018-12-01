import {addDynamic} from "fn-builder";
import propertyIsEnumerable, {FunctionType} from "./functions/propertyIsEnumerable";

addDynamic("objPropertyIsEnumerable", propertyIsEnumerable);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        objPropertyIsEnumerable: FunctionType
    }
}

export default propertyIsEnumerable;
