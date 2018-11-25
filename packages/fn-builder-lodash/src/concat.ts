import * as FnBuilder from "fn-builder";
import concat from "./functions/concat";

FnBuilder.addDynamic("concat", concat);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        concat(ary: any[]): any[]
    }
}

export default concat;
