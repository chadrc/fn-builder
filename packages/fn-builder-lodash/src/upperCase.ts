import * as FnBuilder from "fn-builder";
import upperCase, {FunctionType} from "./functions/upperCase";

FnBuilder.addDynamic("upperCase", upperCase);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        upperCase: FunctionType
    }
}

export default upperCase;
