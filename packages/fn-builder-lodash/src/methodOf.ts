import * as FnBuilder from "fn-builder";
import methodOf, {FunctionType} from "./functions/methodOf";

FnBuilder.addDynamic("methodOf", methodOf);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        methodOf: FunctionType
    }
}

export default methodOf;
