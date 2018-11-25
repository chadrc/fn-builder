import * as FnBuilder from "fn-builder";
import divide, {FunctionType} from "./functions/divide";

FnBuilder.addDynamic("divide", divide);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        divide: FunctionType
    }
}

export default divide;
