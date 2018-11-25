import * as FnBuilder from "fn-builder";
import overEvery, {FunctionType} from "./functions/overEvery";

FnBuilder.addDynamic("overEvery", overEvery);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        overEvery: FunctionType
    }
}

export default overEvery;
