import * as FnBuilder from "fn-builder";
import transform, {FunctionType} from "./functions/transform";

FnBuilder.addDynamic("transform", transform);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        transform: FunctionType
    }
}

export default transform;
