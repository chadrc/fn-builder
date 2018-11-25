import * as FnBuilder from "fn-builder";
import kebabCase, {FunctionType} from "./functions/kebabCase";

FnBuilder.addDynamic("kebabCase", kebabCase);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        kebabCase: FunctionType
    }
}

export default kebabCase;
