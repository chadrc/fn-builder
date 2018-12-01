import {addDynamic} from "fn-builder";
import getOwnPropertyNames, {FunctionType} from "./functions/getOwnPropertyNames";

addDynamic("getOwnPropertyNames", getOwnPropertyNames);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        getOwnPropertyNames: FunctionType
    }
}

export default getOwnPropertyNames;
