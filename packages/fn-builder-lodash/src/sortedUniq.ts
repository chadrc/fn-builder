import * as FnBuilder from "fn-builder";
import sortedUniq, {FunctionType} from "./functions/sortedUniq";

FnBuilder.addDynamic("sortedUniq", sortedUniq);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        sortedUniq: FunctionType
    }
}

export default sortedUniq;
