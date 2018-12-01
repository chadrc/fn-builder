import {addDynamic} from "fn-builder";
import stringify, {FunctionType} from "./functions/stringify";

addDynamic("stringify", stringify);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        stringify: FunctionType
    }
}

export default stringify;
