import {addDynamic} from "fn-builder";
import toLocaleString, {FunctionType} from "./functions/toLocaleString";

addDynamic("toLocaleString", toLocaleString);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        toLocaleString: FunctionType
    }
}

export default toLocaleString;
