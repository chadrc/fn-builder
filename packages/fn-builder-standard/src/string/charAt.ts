import charAt, {FunctionType} from "./functions/charAt";
import {addDynamic} from "fn-builder";

addDynamic("charAt", charAt);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        charAt: FunctionType
    }
}

export default charAt;