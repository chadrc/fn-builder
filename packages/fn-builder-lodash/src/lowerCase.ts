import * as FnBuilder from "fn-builder";
import lowerCase, {FunctionType} from "./functions/lowerCase";

FnBuilder.addDynamic("lowerCase", lowerCase);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        lowerCase: FunctionType
    }
}

export default lowerCase;
