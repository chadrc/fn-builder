import * as FnBuilder from "fn-builder";
import unionBy, {FunctionType} from "./functions/unionBy";

FnBuilder.addDynamic("unionBy", unionBy);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        unionBy: FunctionType
    }
}

export default unionBy;
