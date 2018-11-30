import {addDynamic} from "fn-builder";
import toLocaleLowerCase, {FunctionType} from "./functions/toLocaleLowerCase";

addDynamic("toLocaleLowerCase", toLocaleLowerCase);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        toLocaleLowerCase: FunctionType
    }
}

export default toLocaleLowerCase;
