import * as FnBuilder from "fn-builder";
import invoke, {FunctionType} from "./functions/invoke";

FnBuilder.addDynamic("invoke", invoke);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        invoke: FunctionType
    }
}

export default invoke;
