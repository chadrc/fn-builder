import * as FnBuilder from "fn-builder";
import entries, {FunctionType} from "./functions/entries";

FnBuilder.addDynamic("entries", entries);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        entries: FunctionType
    }
}

export default entries;
