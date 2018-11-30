import {addDynamic} from "fn-builder";
import toUpperCase, {FunctionType} from "./functions/toUpperCase";

addDynamic("toUpperCase", toUpperCase);

declare module "fn-builder/DynamicFn" {
  interface DynamicFn {
    toUpperCase: FunctionType
  }
}

export default toUpperCase;
