import * as FnBuilder from "fn-builder";
import minBy, {FunctionType} from "./functions/minBy";

FnBuilder.addDynamic("minBy", minBy);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        minBy: FunctionType
    }
}

export default minBy;
