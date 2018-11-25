import * as FnBuilder from "fn-builder";
import differenceBy, {FunctionType} from "./functions/differenceBy";

FnBuilder.addDynamic("differenceBy", differenceBy);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        differenceBy: FunctionType
    }
}

export default differenceBy;
