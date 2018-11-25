import * as FnBuilder from "fn-builder";
import without, {FunctionType} from "./functions/without";

FnBuilder.addDynamic("without", without);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        without: FunctionType
    }
}

export default without;
