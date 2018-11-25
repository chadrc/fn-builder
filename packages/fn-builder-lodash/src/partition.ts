import * as FnBuilder from "fn-builder";
import partition, {FunctionType} from "./functions/partition";

FnBuilder.addDynamic("partition", partition);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        partition: FunctionType
    }
}

export default partition;
