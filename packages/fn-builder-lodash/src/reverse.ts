import * as FnBuilder from "fn-builder";
import reverse, {FunctionType} from "./functions/reverse";

FnBuilder.addDynamic("reverse", reverse);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        reverse: FunctionType
    }
}

export default reverse;
