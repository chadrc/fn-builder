import * as FnBuilder from "fn-builder";
import stubObject, {FunctionType} from "./functions/stubObject";

FnBuilder.addDynamic("stubObject", stubObject);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        stubObject: FunctionType
    }
}

export default stubObject;
