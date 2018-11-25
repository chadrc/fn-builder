import * as FnBuilder from "fn-builder";
import compact, {FunctionType} from "./functions/compact";

FnBuilder.addDynamic("compact", compact);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        compact: FunctionType
    }
}

export default compact;
