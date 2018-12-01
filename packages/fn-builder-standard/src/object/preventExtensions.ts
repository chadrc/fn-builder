import {addDynamic} from "fn-builder";
import preventExtensions, {FunctionType} from "./functions/preventExtensions";

addDynamic("preventExtensions", preventExtensions);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        preventExtensions: FunctionType
    }
}

export default preventExtensions;
