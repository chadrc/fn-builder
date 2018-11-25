import * as FnBuilder from "fn-builder";
import indexOf, {FunctionType} from "./functions/indexOf";

FnBuilder.addDynamic("indexOf", indexOf);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        indexOf: FunctionType
    }
}

export default indexOf;
