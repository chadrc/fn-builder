import * as FnBuilder from "fn-builder";
import shuffle, {FunctionType} from "./functions/shuffle";

FnBuilder.addDynamic("shuffle", shuffle);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        shuffle: FunctionType
    }
}

export default shuffle;
