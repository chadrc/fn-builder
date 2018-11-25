import * as FnBuilder from "fn-builder";
import dropRightWhile, {FunctionType} from "./functions/dropRightWhile";

FnBuilder.addDynamic("dropRightWhile", dropRightWhile);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        dropRightWhile: FunctionType
    }
}

export default dropRightWhile;
