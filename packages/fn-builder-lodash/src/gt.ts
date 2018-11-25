import * as FnBuilder from "fn-builder";
import gt, {FunctionType} from "./functions/gt";

FnBuilder.addDynamic("gt", gt);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        gt: FunctionType
    }
}

export default gt;
