import * as FnBuilder from "fn-builder";
import some, {FunctionType} from "./functions/some";

FnBuilder.addDynamic("some", some);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        some: FunctionType
    }
}

export default some;
