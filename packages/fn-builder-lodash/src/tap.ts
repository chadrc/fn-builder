import * as FnBuilder from "fn-builder";
import tap, {FunctionType} from "./functions/tap";

FnBuilder.addDynamic("tap", tap);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        tap: FunctionType
    }
}

export default tap;
