import * as FnBuilder from "fn-builder";
import sortedLastIndexBy, {FunctionType} from "./functions/sortedLastIndexBy";

FnBuilder.addDynamic("sortedLastIndexBy", sortedLastIndexBy);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        sortedLastIndexBy: FunctionType
    }
}

export default sortedLastIndexBy;
