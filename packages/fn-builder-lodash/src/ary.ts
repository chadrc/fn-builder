import * as FnBuilder from "fn-builder";
import ary, {FunctionType} from "./functions/ary";

FnBuilder.addDynamic("ary", ary);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        ary: FunctionType
    }
}

export default ary;
