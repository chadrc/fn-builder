import {addDynamic} from "fn-builder";
import toLocaleUpperCase, {FunctionType} from "./functions/toLocaleUpperCase";

addDynamic("toLocaleUpperCase", toLocaleUpperCase);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        toLocaleUpperCase: FunctionType
    }
}

export default toLocaleUpperCase;
