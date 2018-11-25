import * as FnBuilder from "fn-builder";
import unzip, {FunctionType} from "./functions/unzip";

FnBuilder.addDynamic("unzip", unzip);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        unzip: FunctionType
    }
}

export default unzip;
