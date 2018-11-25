import * as FnBuilder from "fn-builder";
import sortBy, {FunctionType} from "./functions/sortBy";

FnBuilder.addDynamic("sortBy", sortBy);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        sortBy: FunctionType
    }
}

export default sortBy;
