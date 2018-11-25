import * as FnBuilder from "fn-builder";
import defaultsDeep, {FunctionType} from "./functions/defaultsDeep";

FnBuilder.addDynamic("defaultsDeep", defaultsDeep);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        defaultsDeep: FunctionType
    }
}

export default defaultsDeep;
