import {addDynamic} from "fn-builder";
import trimStart, {FunctionType} from "./functions/trimStart";

addDynamic("trimStart", trimStart);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        trimStart: FunctionType
    }
}

export default trimStart;
