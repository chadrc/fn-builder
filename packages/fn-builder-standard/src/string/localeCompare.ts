import {addDynamic} from "fn-builder";
import localeCompare, {FunctionType} from "./functions/localeCompare";

addDynamic("localeCompare", localeCompare);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        localeCompare: FunctionType
    }
}

export default localeCompare;
