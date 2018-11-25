import * as FnBuilder from "fn-builder";
import findLast, {FunctionType} from "./functions/findLast";

FnBuilder.addDynamic("findLast", findLast);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        findLast: FunctionType
    }
}

export default findLast;
