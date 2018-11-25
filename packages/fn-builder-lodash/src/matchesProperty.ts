import * as FnBuilder from "fn-builder";
import matchesProperty, {FunctionType} from "./functions/matchesProperty";

FnBuilder.addDynamic("matchesProperty", matchesProperty);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        matchesProperty: FunctionType
    }
}

export default matchesProperty;
