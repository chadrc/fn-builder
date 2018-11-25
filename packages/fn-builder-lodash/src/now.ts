import * as FnBuilder from "fn-builder";
import now, {FunctionType} from "./functions/now";

FnBuilder.addDynamic("now", now);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        now: FunctionType
    }
}

export default now;
