import {addDynamic} from "fn-builder";
import getOwnPropertySymbols, {FunctionType} from "./functions/getOwnPropertySymbols";

addDynamic("getOwnPropertySymbols", getOwnPropertySymbols);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        getOwnPropertySymbols: FunctionType
    }
}

export default getOwnPropertySymbols;
