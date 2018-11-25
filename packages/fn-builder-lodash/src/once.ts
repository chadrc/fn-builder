import * as FnBuilder from "fn-builder";
import once, {FunctionType} from "./functions/once";

FnBuilder.addDynamic("once", once);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        once: FunctionType
    }
}

export default once;
