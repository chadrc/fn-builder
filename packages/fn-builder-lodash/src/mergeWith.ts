import * as FnBuilder from "fn-builder";
import mergeWith, {FunctionType} from "./functions/mergeWith";

FnBuilder.addDynamic("mergeWith", mergeWith);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        mergeWith: FunctionType
    }
}

export default mergeWith;
