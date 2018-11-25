import * as FnBuilder from "fn-builder";
import overArgs, {FunctionType} from "./functions/overArgs";

FnBuilder.addDynamic("overArgs", overArgs);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        overArgs: FunctionType
    }
}

export default overArgs;
