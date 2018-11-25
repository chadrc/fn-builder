import * as FnBuilder from "fn-builder";
import overSome, {FunctionType} from "./functions/overSome";

FnBuilder.addDynamic("overSome", overSome);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        overSome: FunctionType
    }
}

export default overSome;
