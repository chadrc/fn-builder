import * as FnBuilder from "fn-builder";
import keysIn, {FunctionType} from "./functions/keysIn";

FnBuilder.addDynamic("keysIn", keysIn);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        keysIn: FunctionType
    }
}

export default keysIn;
