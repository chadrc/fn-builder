import * as FnBuilder from "fn-builder";
import chunk = require("lodash/chunk");

FnBuilder.addDynamic("chunk", (size: number) => (ary: any[]) => chunk(ary, size));

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        chunk(size: number): (ary: any[]) => any[]
    }
}
