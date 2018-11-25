import * as FnBuilder from "fn-builder";
import nth, {FunctionType} from "./functions/nth";

FnBuilder.addDynamic("nth", nth);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        nth: FunctionType
    }
}

export default nth;
