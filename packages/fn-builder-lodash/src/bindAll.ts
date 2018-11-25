import * as FnBuilder from "fn-builder";
import bindAll, {FunctionType} from "./functions/bindAll";

FnBuilder.addDynamic("bindAll", bindAll);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        bindAll: FunctionType
    }
}

export default bindAll;
