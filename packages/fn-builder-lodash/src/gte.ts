import * as FnBuilder from "fn-builder";
import gte, {FunctionType} from "./functions/gte";

FnBuilder.addDynamic("gte", gte);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        gte: FunctionType
    }
}

export default gte;
