import * as FnBuilder from "fn-builder";
import matches, {FunctionType} from "./functions/matches";

FnBuilder.addDynamic("matches", matches);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        matches: FunctionType
    }
}

export default matches;
