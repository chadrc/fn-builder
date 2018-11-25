import * as FnBuilder from "fn-builder";
import wrap, {FunctionType} from "./functions/wrap";

FnBuilder.addDynamic("wrap", wrap);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        wrap: FunctionType
    }
}

export default wrap;
