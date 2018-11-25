import * as FnBuilder from "fn-builder";
import filter, {FunctionType} from "./functions/filter";

FnBuilder.addDynamic("filter", filter);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        filter: FunctionType
    }
}

export default filter;
