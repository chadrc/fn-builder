import * as FnBuilder from "fn-builder";
import zip, {FunctionType} from "./functions/zip";

FnBuilder.addDynamic("zip", zip);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        zip: FunctionType
    }
}

export default zip;
