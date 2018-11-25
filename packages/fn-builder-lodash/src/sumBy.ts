import * as FnBuilder from "fn-builder";
import sumBy, {FunctionType} from "./functions/sumBy";

FnBuilder.addDynamic("sumBy", sumBy);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        sumBy: FunctionType
    }
}

export default sumBy;
