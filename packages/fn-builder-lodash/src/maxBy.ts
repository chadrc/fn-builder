import * as FnBuilder from "fn-builder";
import maxBy, {FunctionType} from "./functions/maxBy";

FnBuilder.addDynamic("maxBy", maxBy);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        maxBy: FunctionType
    }
}

export default maxBy;
