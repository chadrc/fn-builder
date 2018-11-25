import * as FnBuilder from "fn-builder";
import lastIndexOf, {FunctionType} from "./functions/lastIndexOf";

FnBuilder.addDynamic("lastIndexOf", lastIndexOf);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        lastIndexOf: FunctionType
    }
}

export default lastIndexOf;
