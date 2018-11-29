import {addDynamic} from "fn-builder";
import normalize, {FunctionType} from "./functions/normalize";

addDynamic("normalize", normalize);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        normalize: FunctionType
    }
}

export default normalize;
