import {addDynamic} from "fn-builder";
import getOwnPropertyDescriptors, {FunctionType} from "./functions/getOwnPropertyDescriptors";

addDynamic("getOwnPropertyDescriptors", getOwnPropertyDescriptors);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        getOwnPropertyDescriptors: FunctionType
    }
}

export default getOwnPropertyDescriptors;
