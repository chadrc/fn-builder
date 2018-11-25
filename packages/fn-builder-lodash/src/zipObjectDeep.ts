import * as FnBuilder from "fn-builder";
import zipObjectDeep, {FunctionType} from "./functions/zipObjectDeep";

FnBuilder.addDynamic("zipObjectDeep", zipObjectDeep);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        zipObjectDeep: FunctionType
    }
}

export default zipObjectDeep;
