import * as FnBuilder from "fn-builder";
import meanBy, {FunctionType} from "./functions/meanBy";

FnBuilder.addDynamic("meanBy", meanBy);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        meanBy: FunctionType
    }
}

export default meanBy;
