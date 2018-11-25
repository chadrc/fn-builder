import * as FnBuilder from "fn-builder";
import sortedIndexOf, {FunctionType} from "./functions/sortedIndexOf";

FnBuilder.addDynamic("sortedIndexOf", sortedIndexOf);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        sortedIndexOf: FunctionType
    }
}

export default sortedIndexOf;
