import * as FnBuilder from "fn-builder";
import sortedIndex, {FunctionType} from "./functions/sortedIndex";

FnBuilder.addDynamic("sortedIndex", sortedIndex);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        sortedIndex: FunctionType
    }
}

export default sortedIndex;
