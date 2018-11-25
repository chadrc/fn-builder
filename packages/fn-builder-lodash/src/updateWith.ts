import * as FnBuilder from "fn-builder";
import updateWith, {FunctionType} from "./functions/updateWith";

FnBuilder.addDynamic("updateWith", updateWith);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        updateWith: FunctionType
    }
}

export default updateWith;
