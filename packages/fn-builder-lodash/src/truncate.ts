import * as FnBuilder from "fn-builder";
import truncate, {FunctionType} from "./functions/truncate";

FnBuilder.addDynamic("truncate", truncate);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        truncate: FunctionType
    }
}

export default truncate;
