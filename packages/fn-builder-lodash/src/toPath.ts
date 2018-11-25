import * as FnBuilder from "fn-builder";
import toPath, {FunctionType} from "./functions/toPath";

FnBuilder.addDynamic("toPath", toPath);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        toPath: FunctionType
    }
}

export default toPath;
