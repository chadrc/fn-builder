import codePointAt, {FunctionType} from "./functions/codePointAt";
import {addDynamic} from "fn-builder";

addDynamic("codePointAt", codePointAt);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        codePointAt: FunctionType
    }
}

export default codePointAt;