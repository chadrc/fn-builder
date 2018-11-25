import * as FnBuilder from "fn-builder";
import isEmpty, {FunctionType} from "./functions/isEmpty";

FnBuilder.addDynamic("isEmpty", isEmpty);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        isEmpty: FunctionType
    }
}

export default isEmpty;
