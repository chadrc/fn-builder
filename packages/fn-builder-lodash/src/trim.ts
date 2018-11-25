import * as FnBuilder from "fn-builder";
import trim, {FunctionType} from "./functions/trim";

FnBuilder.addDynamic("trim", trim);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        trim: FunctionType
    }
}

export default trim;
