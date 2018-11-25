import * as FnBuilder from "fn-builder";
import assignIn, {FunctionType} from "./functions/assignIn";

FnBuilder.addDynamic("assignIn", assignIn);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        assignIn: FunctionType
    }
}

export default assignIn;
