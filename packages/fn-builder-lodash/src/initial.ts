import * as FnBuilder from "fn-builder";
import initial, {FunctionType} from "./functions/initial";

FnBuilder.addDynamic("initial", initial);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        initial: FunctionType
    }
}

export default initial;
