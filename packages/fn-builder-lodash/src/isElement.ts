import * as FnBuilder from "fn-builder";
import isElement, {FunctionType} from "./functions/isElement";

FnBuilder.addDynamic("isElement", isElement);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        isElement: FunctionType
    }
}

export default isElement;
