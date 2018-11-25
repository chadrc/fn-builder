import * as FnBuilder from "fn-builder";
import lte, {FunctionType} from "./functions/lte";

FnBuilder.addDynamic("lte", lte);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        lte: FunctionType
    }
}

export default lte;
