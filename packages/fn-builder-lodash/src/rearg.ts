import * as FnBuilder from "fn-builder";
import rearg, {FunctionType} from "./functions/rearg";

FnBuilder.addDynamic("rearg", rearg);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        rearg: FunctionType
    }
}

export default rearg;
