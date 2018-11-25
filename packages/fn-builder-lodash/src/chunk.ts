import * as FnBuilder from "fn-builder";
import chunk, {FunctionType} from "./functions/chunk";

FnBuilder.addDynamic("chunk", chunk);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        chunk: FunctionType
    }
}

export default chunk;
