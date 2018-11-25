import * as FnBuilder from "fn-builder";
import sortedUniqBy, {FunctionType} from "./functions/sortedUniqBy";

FnBuilder.addDynamic("sortedUniqBy", sortedUniqBy);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        sortedUniqBy: FunctionType
    }
}

export default sortedUniqBy;
