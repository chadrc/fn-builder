import * as FnBuilder from "fn-builder";
import upperFirst, {FunctionType} from "./functions/upperFirst";

FnBuilder.addDynamic("upperFirst", upperFirst);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        upperFirst: FunctionType
    }
}

export default upperFirst;
