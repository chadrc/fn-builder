import * as FnBuilder from "fn-builder";
import every, {FunctionType} from "./functions/every";

FnBuilder.addDynamic("every", every);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        every: FunctionType
    }
}

export default every;
