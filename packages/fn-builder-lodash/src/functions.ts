import * as FnBuilder from "fn-builder";
import functions, {FunctionType} from "./functions/functions";

FnBuilder.addDynamic("functions", functions);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        functions: FunctionType
    }
}

export default functions;
