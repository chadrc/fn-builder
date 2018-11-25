import * as FnBuilder from "fn-builder";
import stubString, {FunctionType} from "./functions/stubString";

FnBuilder.addDynamic("stubString", stubString);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        stubString: FunctionType
    }
}

export default stubString;
