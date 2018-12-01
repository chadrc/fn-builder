import {addDynamic} from "fn-builder";
import toLocaleString, {FunctionType} from "./functions/toLocaleString";

addDynamic("objToLocaleString", toLocaleString);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        objToLocaleString: FunctionType
    }
}

export default toLocaleString;
