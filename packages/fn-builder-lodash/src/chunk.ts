import * as FnBuilder from "fn-builder";
import chunk from "./functions/chunk";

FnBuilder.addDynamic("chunk", chunk);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        chunk(size: number): (ary: any[]) => any[]
    }
}

export default chunk;
