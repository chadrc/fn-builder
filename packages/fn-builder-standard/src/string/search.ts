import {addDynamic} from "fn-builder";
import search, {FunctionType} from "./functions/search";

addDynamic("search", search);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        search: FunctionType
    }
}

export default search;
