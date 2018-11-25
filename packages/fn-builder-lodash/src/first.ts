import * as FnBuilder from "fn-builder";
import first, {FunctionType} from "./functions/first";

FnBuilder.addDynamic("first", first);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        first: FunctionType
    }
}

export default first;
