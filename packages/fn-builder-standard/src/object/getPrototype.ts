import {addDynamic} from "fn-builder";
import getPrototype, {FunctionType} from "./functions/getPrototype";

addDynamic("getPrototype", getPrototype);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        getPrototype: FunctionType
    }
}

export default getPrototype;
