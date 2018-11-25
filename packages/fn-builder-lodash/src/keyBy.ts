import * as FnBuilder from "fn-builder";
import keyBy, {FunctionType} from "./functions/keyBy";

FnBuilder.addDynamic("keyBy", keyBy);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        keyBy: FunctionType
    }
}

export default keyBy;
