import * as FnBuilder from "fn-builder";
import differenceWith, {FunctionType} from "./functions/differenceWith";

FnBuilder.addDynamic("differenceWith", differenceWith);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        differenceWith: FunctionType
    }
}

export default differenceWith;
