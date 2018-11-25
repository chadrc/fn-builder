import * as FnBuilder from "fn-builder";
import noop, {FunctionType} from "./functions/noop";

FnBuilder.addDynamic("noop", noop);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        noop: FunctionType
    }
}

export default noop;
