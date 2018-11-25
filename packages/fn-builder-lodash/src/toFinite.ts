import * as FnBuilder from "fn-builder";
import toFinite, {FunctionType} from "./functions/toFinite";

FnBuilder.addDynamic("toFinite", toFinite);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        toFinite: FunctionType
    }
}

export default toFinite;
