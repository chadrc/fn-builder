import * as FnBuilder from "fn-builder";
import assignInWith, {FunctionType} from "./functions/assignInWith";

FnBuilder.addDynamic("assignInWith", assignInWith);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        assignInWith: FunctionType
    }
}

export default assignInWith;
