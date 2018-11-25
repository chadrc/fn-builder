import * as FnBuilder from "fn-builder";
import padEnd, {FunctionType} from "./functions/padEnd";

FnBuilder.addDynamic("padEnd", padEnd);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        padEnd: FunctionType
    }
}

export default padEnd;
