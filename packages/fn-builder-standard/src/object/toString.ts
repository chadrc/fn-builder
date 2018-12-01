import {addDynamic} from "fn-builder";
import toString, {FunctionType} from "./functions/toString";

addDynamic("objToString", toString);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        objToString: FunctionType
    }
}

export default toString;
