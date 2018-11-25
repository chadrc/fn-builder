import * as FnBuilder from "fn-builder";
import reject, {FunctionType} from "./functions/reject";

FnBuilder.addDynamic("reject", reject);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        reject: FunctionType
    }
}

export default reject;
