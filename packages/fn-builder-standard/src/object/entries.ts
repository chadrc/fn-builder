import {addDynamic} from "fn-builder";
import entries, {FunctionType} from "./functions/entries";

addDynamic("entries", entries);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        entries: FunctionType
    }
}

export default entries;
