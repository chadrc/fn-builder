import * as FnBuilder from "fn-builder";
import pad, {FunctionType} from "./functions/pad";

FnBuilder.addDynamic("pad", pad);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        pad: FunctionType
    }
}

export default pad;
