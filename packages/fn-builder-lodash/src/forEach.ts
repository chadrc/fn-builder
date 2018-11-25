import * as FnBuilder from "fn-builder";
import forEach, {FunctionType} from "./functions/forEach";

FnBuilder.addDynamic("forEach", forEach);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        forEach: FunctionType
    }
}

export default forEach;
