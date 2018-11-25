import * as FnBuilder from "fn-builder";
import stubTrue, {FunctionType} from "./functions/stubTrue";

FnBuilder.addDynamic("stubTrue", stubTrue);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        stubTrue: FunctionType
    }
}

export default stubTrue;
