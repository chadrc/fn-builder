import {addDynamic} from "fn-builder";
import lastIndexOf, {FunctionType} from "./functions/lastIndexOf";

addDynamic("lastIndexOf", lastIndexOf);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        lastIndexOf: FunctionType
    }
}

export default lastIndexOf;
