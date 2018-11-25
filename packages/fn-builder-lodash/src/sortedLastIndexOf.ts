import * as FnBuilder from "fn-builder";
import sortedLastIndexOf, {FunctionType} from "./functions/sortedLastIndexOf";

FnBuilder.addDynamic("sortedLastIndexOf", sortedLastIndexOf);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        sortedLastIndexOf: FunctionType
    }
}

export default sortedLastIndexOf;
