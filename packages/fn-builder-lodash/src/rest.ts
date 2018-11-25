import * as FnBuilder from "fn-builder";
import rest, {FunctionType} from "./functions/rest";

FnBuilder.addDynamic("rest", rest);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        rest: FunctionType
    }
}

export default rest;
