import * as FnBuilder from "fn-builder";
import isArguments, {FunctionType} from "./functions/isArguments";

FnBuilder.addDynamic("isArguments", isArguments);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        isArguments: FunctionType
    }
}

export default isArguments;
