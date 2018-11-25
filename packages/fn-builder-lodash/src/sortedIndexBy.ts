import * as FnBuilder from "fn-builder";
import sortedIndexBy, {FunctionType} from "./functions/sortedIndexBy";

FnBuilder.addDynamic("sortedIndexBy", sortedIndexBy);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        sortedIndexBy: FunctionType
    }
}

export default sortedIndexBy;
