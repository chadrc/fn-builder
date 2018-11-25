import * as FnBuilder from "fn-builder";
import invert, {FunctionType} from "./functions/invert";

FnBuilder.addDynamic("invert", invert);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        invert: FunctionType
    }
}

export default invert;
