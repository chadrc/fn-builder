import * as FnBuilder from "fn-builder";
import pullAt, {FunctionType} from "./functions/pullAt";

FnBuilder.addDynamic("pullAt", pullAt);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        pullAt: FunctionType
    }
}

export default pullAt;
