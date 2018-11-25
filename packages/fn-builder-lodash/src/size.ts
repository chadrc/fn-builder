import * as FnBuilder from "fn-builder";
import size, {FunctionType} from "./functions/size";

FnBuilder.addDynamic("size", size);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        size: FunctionType
    }
}

export default size;
