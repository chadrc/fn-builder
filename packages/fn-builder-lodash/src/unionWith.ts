import * as FnBuilder from "fn-builder";
import unionWith, {FunctionType} from "./functions/unionWith";

FnBuilder.addDynamic("unionWith", unionWith);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        unionWith: FunctionType
    }
}

export default unionWith;
