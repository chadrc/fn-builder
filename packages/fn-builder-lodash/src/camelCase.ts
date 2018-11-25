import * as FnBuilder from "fn-builder";
import camelCase, {FunctionType} from "./functions/camelCase";

FnBuilder.addDynamic("camelCase", camelCase);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        camelCase: FunctionType
    }
}

export default camelCase;
