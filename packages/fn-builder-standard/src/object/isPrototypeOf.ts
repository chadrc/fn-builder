import {addDynamic} from "fn-builder";
import isPrototypeOf, {FunctionType} from "./functions/isPrototypeOf";

addDynamic("isPrototypeOf", isPrototypeOf);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        isPrototypeOf: FunctionType
    }
}

export default isPrototypeOf;
