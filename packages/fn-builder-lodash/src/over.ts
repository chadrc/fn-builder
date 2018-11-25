import * as FnBuilder from "fn-builder";
import over, {FunctionType} from "./functions/over";

FnBuilder.addDynamic("over", over);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        over: FunctionType
    }
}

export default over;
