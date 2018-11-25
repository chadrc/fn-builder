import * as FnBuilder from "fn-builder";
import flatMapDepth, {FunctionType} from "./functions/flatMapDepth";

FnBuilder.addDynamic("flatMapDepth", flatMapDepth);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        flatMapDepth: FunctionType
    }
}

export default flatMapDepth;
