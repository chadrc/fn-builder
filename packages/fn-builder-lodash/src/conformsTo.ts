import * as FnBuilder from "fn-builder";
import conformsTo, {FunctionType} from "./functions/conformsTo";

FnBuilder.addDynamic("conformsTo", conformsTo);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        conformsTo: FunctionType
    }
}

export default conformsTo;
