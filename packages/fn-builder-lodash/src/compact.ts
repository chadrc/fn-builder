import * as FnBuilder from "fn-builder";
import compact from "./functions/compact";

FnBuilder.addDynamic("compact", compact);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        compact(ary: any[]): any[]
    }
}

export default compact;
