import {addDynamic} from "fn-builder";
import isPrototypeOf, {FunctionType} from "./functions/isPrototypeOf";

addDynamic("objIsPrototypeOf", isPrototypeOf);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        objIsPrototypeOf: FunctionType
    }
}

export default isPrototypeOf;
