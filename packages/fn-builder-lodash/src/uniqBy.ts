import * as FnBuilder from "fn-builder";
import uniqBy, {FunctionType} from "./functions/uniqBy";

FnBuilder.addDynamic("uniqBy", uniqBy);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        uniqBy: FunctionType
    }
}

export default uniqBy;
