import * as FnBuilder from "fn-builder";
import pick, {FunctionType} from "./functions/pick";

FnBuilder.addDynamic("pick", pick);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        pick: FunctionType
    }
}

export default pick;
