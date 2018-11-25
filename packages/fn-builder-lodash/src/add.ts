import * as FnBuilder from "fn-builder";
import add, {FunctionType} from "./functions/add";

FnBuilder.addDynamic("add", add);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        add: FunctionType
    }
}

export default add;
