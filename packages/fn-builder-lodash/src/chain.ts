import * as FnBuilder from "fn-builder";
import chain, {FunctionType} from "./functions/chain";

FnBuilder.addDynamic("chain", chain);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        chain: FunctionType
    }
}

export default chain;
