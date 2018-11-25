import * as FnBuilder from "fn-builder";
import head, {FunctionType} from "./functions/head";

FnBuilder.addDynamic("head", head);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        head: FunctionType
    }
}

export default head;
