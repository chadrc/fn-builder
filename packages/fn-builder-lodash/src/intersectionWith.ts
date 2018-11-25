import * as FnBuilder from "fn-builder";
import intersectionWith, {FunctionType} from "./functions/intersectionWith";

FnBuilder.addDynamic("intersectionWith", intersectionWith);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        intersectionWith: FunctionType
    }
}

export default intersectionWith;
