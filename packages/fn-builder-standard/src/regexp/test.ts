import {addDynamic} from "fn-builder";
import test, {FunctionType} from "./functions/test";

addDynamic("test", test);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        test: FunctionType
    }
}

export default test;
