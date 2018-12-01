import {addDynamic} from "fn-builder";
import hasOwnProperty, {FunctionType} from "./functions/hasOwnProperty";

addDynamic("objHasOwnProperty", hasOwnProperty);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        objHasOwnProperty: FunctionType
    }
}

export default hasOwnProperty;
