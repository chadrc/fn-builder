import * as FnBuilder from "fn-builder";
import flow, {FunctionType} from "./functions/flow";

FnBuilder.addDynamic("flow", flow);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        flow: FunctionType
    }
}

export default flow;
