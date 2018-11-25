import * as FnBuilder from "fn-builder";
import create, {FunctionType} from "./functions/create";

FnBuilder.addDynamic("create", create);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        create: FunctionType
    }
}

export default create;
