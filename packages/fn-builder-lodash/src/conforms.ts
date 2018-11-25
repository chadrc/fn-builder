import * as FnBuilder from "fn-builder";
import conforms, {FunctionType} from "./functions/conforms";

FnBuilder.addDynamic("conforms", conforms);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        conforms: FunctionType
    }
}

export default conforms;
