import * as FnBuilder from "fn-builder";
import sum, {FunctionType} from "./functions/sum";

FnBuilder.addDynamic("sum", sum);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        sum: FunctionType
    }
}

export default sum;
