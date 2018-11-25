import * as FnBuilder from "fn-builder";
import pickBy, {FunctionType} from "./functions/pickBy";

FnBuilder.addDynamic("pickBy", pickBy);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        pickBy: FunctionType
    }
}

export default pickBy;
