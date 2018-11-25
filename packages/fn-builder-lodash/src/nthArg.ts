import * as FnBuilder from "fn-builder";
import nthArg, {FunctionType} from "./functions/nthArg";

FnBuilder.addDynamic("nthArg", nthArg);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        nthArg: FunctionType
    }
}

export default nthArg;
