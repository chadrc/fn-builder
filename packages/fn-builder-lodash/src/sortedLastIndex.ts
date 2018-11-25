import * as FnBuilder from "fn-builder";
import sortedLastIndex, {FunctionType} from "./functions/sortedLastIndex";

FnBuilder.addDynamic("sortedLastIndex", sortedLastIndex);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        sortedLastIndex: FunctionType
    }
}

export default sortedLastIndex;
