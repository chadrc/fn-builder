import * as FnBuilder from "fn-builder";
import dropRight, {FunctionType} from "./functions/dropRight";

FnBuilder.addDynamic("dropRight", dropRight);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        dropRight: FunctionType
    }
}

export default dropRight;
