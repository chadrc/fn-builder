import * as FnBuilder from "fn-builder";
import range, {FunctionType} from "./functions/range";

FnBuilder.addDynamic("range", range);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        range: FunctionType
    }
}

export default range;
