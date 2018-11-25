import * as FnBuilder from "fn-builder";
import identity, {FunctionType} from "./functions/identity";

FnBuilder.addDynamic("identity", identity);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        identity: FunctionType
    }
}

export default identity;
