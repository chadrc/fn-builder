import * as FnBuilder from "fn-builder";
import trimStart, {FunctionType} from "./functions/trimStart";

FnBuilder.addDynamic("trimStart", trimStart);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        trimStart: FunctionType
    }
}

export default trimStart;
