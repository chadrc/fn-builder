import * as FnBuilder from "fn-builder";
import omit, {FunctionType} from "./functions/omit";

FnBuilder.addDynamic("omit", omit);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        omit: FunctionType
    }
}

export default omit;
