import * as FnBuilder from "fn-builder";
import capitalize, {FunctionType} from "./functions/capitalize";

FnBuilder.addDynamic("capitalize", capitalize);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        capitalize: FunctionType
    }
}

export default capitalize;
