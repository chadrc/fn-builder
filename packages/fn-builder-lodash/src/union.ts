import * as FnBuilder from "fn-builder";
import union, {FunctionType} from "./functions/union";

FnBuilder.addDynamic("union", union);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        union: FunctionType
    }
}

export default union;
