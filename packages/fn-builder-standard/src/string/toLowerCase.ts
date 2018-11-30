import {addDynamic} from "fn-builder";
import toLowerCase, {FunctionType} from "./functions/toLowerCase";

addDynamic("toLowerCase", toLowerCase);

declare module "fn-builder/DynamicFn" {
  interface DynamicFn {
    toLowerCase: FunctionType
  }
}

export default toLowerCase;
