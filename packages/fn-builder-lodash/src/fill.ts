import * as FnBuilder from "fn-builder";
import fill, {FunctionType} from "./functions/fill";

FnBuilder.addDynamic("fill", fill);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        fill: FunctionType
    }
}

export default fill;
