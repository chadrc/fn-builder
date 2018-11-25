import * as FnBuilder from "fn-builder";
import parseInt, {FunctionType} from "./functions/parseInt";

FnBuilder.addDynamic("parseInt", parseInt);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        parseInt: FunctionType
    }
}

export default parseInt;
