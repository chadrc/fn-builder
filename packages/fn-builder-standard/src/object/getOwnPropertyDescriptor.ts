import {addDynamic} from "fn-builder";
import getOwnPropertyDescriptor, {FunctionType} from "./functions/getOwnPropertyDescriptor";

addDynamic("getOwnPropertyDescriptor", getOwnPropertyDescriptor);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        getOwnPropertyDescriptor: FunctionType
    }
}

export default getOwnPropertyDescriptor;
