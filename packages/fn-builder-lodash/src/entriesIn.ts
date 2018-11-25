import * as FnBuilder from "fn-builder";
import entriesIn, {FunctionType} from "./functions/entriesIn";

FnBuilder.addDynamic("entriesIn", entriesIn);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        entriesIn: FunctionType
    }
}

export default entriesIn;
