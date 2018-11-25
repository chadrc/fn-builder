import * as FnBuilder from "fn-builder";
import groupBy, {FunctionType} from "./functions/groupBy";

FnBuilder.addDynamic("groupBy", groupBy);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        groupBy: FunctionType
    }
}

export default groupBy;
