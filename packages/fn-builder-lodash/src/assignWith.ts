import * as FnBuilder from "fn-builder";
import assignWith, {FunctionType} from "./functions/assignWith";

FnBuilder.addDynamic("assignWith", assignWith);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        assignWith: FunctionType
    }
}

export default assignWith;
