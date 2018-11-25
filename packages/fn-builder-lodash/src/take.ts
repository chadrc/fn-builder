import * as FnBuilder from "fn-builder";
import take, {FunctionType} from "./functions/take";

FnBuilder.addDynamic("take", take);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        take: FunctionType
    }
}

export default take;
