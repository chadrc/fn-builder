import * as FnBuilder from "fn-builder";
import takeRight, {FunctionType} from "./functions/takeRight";

FnBuilder.addDynamic("takeRight", takeRight);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        takeRight: FunctionType
    }
}

export default takeRight;
