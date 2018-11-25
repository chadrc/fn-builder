import * as FnBuilder from "fn-builder";
import intersectionBy, {FunctionType} from "./functions/intersectionBy";

FnBuilder.addDynamic("intersectionBy", intersectionBy);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        intersectionBy: FunctionType
    }
}

export default intersectionBy;
