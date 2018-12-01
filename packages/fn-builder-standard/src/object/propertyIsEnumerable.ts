import {addDynamic} from "fn-builder";
import propertyIsEnumerable, {FunctionType} from "./functions/propertyIsEnumerable";

addDynamic("propertyIsEnumerable", propertyIsEnumerable);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        propertyIsEnumerable: FunctionType
    }
}

export default propertyIsEnumerable;
