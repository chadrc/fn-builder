import {addDynamic} from "fn-builder";
import is, {FunctionType} from "./functions/is";

addDynamic("is", is);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        is: FunctionType
    }
}

export default is;
