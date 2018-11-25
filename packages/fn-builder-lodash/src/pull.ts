import * as FnBuilder from "fn-builder";
import pull, {FunctionType} from "./functions/pull";

FnBuilder.addDynamic("pull", pull);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        pull: FunctionType
    }
}

export default pull;
