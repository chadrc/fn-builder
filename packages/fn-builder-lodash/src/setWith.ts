import * as FnBuilder from "fn-builder";
import setWith, {FunctionType} from "./functions/setWith";

FnBuilder.addDynamic("setWith", setWith);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        setWith: FunctionType
    }
}

export default setWith;
