import * as FnBuilder from "fn-builder";
import propertyOf, {FunctionType} from "./functions/propertyOf";

FnBuilder.addDynamic("propertyOf", propertyOf);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        propertyOf: FunctionType
    }
}

export default propertyOf;
