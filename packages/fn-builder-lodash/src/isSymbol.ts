import * as FnBuilder from "fn-builder";
import isSymbol, {FunctionType} from "./functions/isSymbol";

FnBuilder.addDynamic("isSymbol", isSymbol);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        isSymbol: FunctionType
    }
}

export default isSymbol;
