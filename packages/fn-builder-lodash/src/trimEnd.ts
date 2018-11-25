import * as FnBuilder from "fn-builder";
import trimEnd, {FunctionType} from "./functions/trimEnd";

FnBuilder.addDynamic("trimEnd", trimEnd);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        trimEnd: FunctionType
    }
}

export default trimEnd;
