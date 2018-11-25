import * as FnBuilder from "fn-builder";
import uniqueId, {FunctionType} from "./functions/uniqueId";

FnBuilder.addDynamic("uniqueId", uniqueId);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        uniqueId: FunctionType
    }
}

export default uniqueId;
