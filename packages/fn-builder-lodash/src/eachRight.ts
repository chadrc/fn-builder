import * as FnBuilder from "fn-builder";
import eachRight, {FunctionType} from "./functions/eachRight";

FnBuilder.addDynamic("eachRight", eachRight);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        eachRight: FunctionType
    }
}

export default eachRight;
