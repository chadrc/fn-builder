import * as FnBuilder from "fn-builder";
import takeWhile, {FunctionType} from "./functions/takeWhile";

FnBuilder.addDynamic("takeWhile", takeWhile);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        takeWhile: FunctionType
    }
}

export default takeWhile;
