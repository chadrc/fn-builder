import * as FnBuilder from "fn-builder";
import dropWhile, {FunctionType} from "./functions/dropWhile";

FnBuilder.addDynamic("dropWhile", dropWhile);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        dropWhile: FunctionType
    }
}

export default dropWhile;
