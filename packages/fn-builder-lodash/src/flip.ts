import * as FnBuilder from "fn-builder";
import flip, {FunctionType} from "./functions/flip";

FnBuilder.addDynamic("flip", flip);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        flip: FunctionType
    }
}

export default flip;
