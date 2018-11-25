import * as FnBuilder from "fn-builder";
import toLower, {FunctionType} from "./functions/toLower";

FnBuilder.addDynamic("toLower", toLower);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        toLower: FunctionType
    }
}

export default toLower;
