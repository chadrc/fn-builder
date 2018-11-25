import * as FnBuilder from "fn-builder";
import toNumber, {FunctionType} from "./functions/toNumber";

FnBuilder.addDynamic("toNumber", toNumber);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        toNumber: FunctionType
    }
}

export default toNumber;
