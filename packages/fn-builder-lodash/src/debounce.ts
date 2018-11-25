import * as FnBuilder from "fn-builder";
import debounce, {FunctionType} from "./functions/debounce";

FnBuilder.addDynamic("debounce", debounce);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        debounce: FunctionType
    }
}

export default debounce;
