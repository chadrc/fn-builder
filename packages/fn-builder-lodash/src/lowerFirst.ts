import * as FnBuilder from "fn-builder";
import lowerFirst, {FunctionType} from "./functions/lowerFirst";

FnBuilder.addDynamic("lowerFirst", lowerFirst);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        lowerFirst: FunctionType
    }
}

export default lowerFirst;
