import {addDynamic} from "fn-builder";
import setPrototypeOf, {FunctionType} from "./functions/setPrototypeOf";

addDynamic("setPrototypeOf", setPrototypeOf);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        setPrototypeOf: FunctionType
    }
}

export default setPrototypeOf;
