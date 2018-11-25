import * as FnBuilder from "fn-builder";
import sampleSize, {FunctionType} from "./functions/sampleSize";

FnBuilder.addDynamic("sampleSize", sampleSize);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        sampleSize: FunctionType
    }
}

export default sampleSize;
