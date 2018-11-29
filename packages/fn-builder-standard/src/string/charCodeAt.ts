import charCodeAt, {FunctionType} from "./functions/charCodeAt";
import {addDynamic} from "fn-builder";

addDynamic("charCodeAt", charCodeAt);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        charCodeAt: FunctionType
    }
}

export default charCodeAt;