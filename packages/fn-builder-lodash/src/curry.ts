import * as FnBuilder from "fn-builder";
import curry, {FunctionType} from "./functions/curry";

FnBuilder.addDynamic("curry", curry);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        curry: FunctionType
    }
}

export default curry;
