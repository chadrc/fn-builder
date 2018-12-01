import {addDynamic} from "fn-builder";
import hasOwnProperty, {FunctionType} from "./functions/hasOwnProperty";

addDynamic("hasOwnProperty", hasOwnProperty);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        hasOwnProperty: FunctionType
    }
}

export default hasOwnProperty;
