import * as FnBuilder from "fn-builder";
import bind, {FunctionType} from "./functions/bind";

FnBuilder.addDynamic("bind", bind);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        bind: FunctionType
    }
}

export default bind;
