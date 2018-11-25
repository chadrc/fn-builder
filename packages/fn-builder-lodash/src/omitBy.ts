import * as FnBuilder from "fn-builder";
import omitBy, {FunctionType} from "./functions/omitBy";

FnBuilder.addDynamic("omitBy", omitBy);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        omitBy: FunctionType
    }
}

export default omitBy;
