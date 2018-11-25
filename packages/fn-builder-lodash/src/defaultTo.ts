import * as FnBuilder from "fn-builder";
import defaultTo, {FunctionType} from "./functions/defaultTo";

FnBuilder.addDynamic("defaultTo", defaultTo);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        defaultTo: FunctionType
    }
}

export default defaultTo;
