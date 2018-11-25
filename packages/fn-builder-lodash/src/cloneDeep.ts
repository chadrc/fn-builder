import * as FnBuilder from "fn-builder";
import cloneDeep, {FunctionType} from "./functions/cloneDeep";

FnBuilder.addDynamic("cloneDeep", cloneDeep);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        cloneDeep: FunctionType
    }
}

export default cloneDeep;
