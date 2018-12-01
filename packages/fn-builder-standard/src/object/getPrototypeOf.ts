import {addDynamic} from "fn-builder";
import getPrototypeOf, {FunctionType} from "./functions/getPrototypeOf";

addDynamic("getPrototypeOf", getPrototypeOf);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        getPrototypeOf: FunctionType
    }
}

export default getPrototypeOf;
