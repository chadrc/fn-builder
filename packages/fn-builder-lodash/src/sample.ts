import * as FnBuilder from "fn-builder";
import sample, {FunctionType} from "./functions/sample";

FnBuilder.addDynamic("sample", sample);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        sample: FunctionType
    }
}

export default sample;
