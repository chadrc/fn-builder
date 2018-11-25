import * as FnBuilder from "fn-builder";
import countBy, {FunctionType} from "./functions/countBy";

FnBuilder.addDynamic("countBy", countBy);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        countBy: FunctionType
    }
}

export default countBy;
