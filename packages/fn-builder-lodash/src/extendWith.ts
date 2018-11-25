import * as FnBuilder from "fn-builder";
import extendWith, {FunctionType} from "./functions/extendWith";

FnBuilder.addDynamic("extendWith", extendWith);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        extendWith: FunctionType
    }
}

export default extendWith;
