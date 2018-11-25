import * as FnBuilder from "fn-builder";
import join, {FunctionType} from "./functions/join";

FnBuilder.addDynamic("join", join);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        join: FunctionType
    }
}

export default join;
