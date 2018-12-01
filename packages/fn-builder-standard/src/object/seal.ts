import {addDynamic} from "fn-builder";
import seal, {FunctionType} from "./functions/seal";

addDynamic("seal", seal);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        seal: FunctionType
    }
}

export default seal;
