import * as FnBuilder from "fn-builder";
import difference, {FunctionType} from "./functions/difference";

FnBuilder.addDynamic("difference", difference);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        difference: FunctionType
    }
}

export default difference;
