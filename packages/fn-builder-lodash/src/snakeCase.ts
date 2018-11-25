import * as FnBuilder from "fn-builder";
import snakeCase, {FunctionType} from "./functions/snakeCase";

FnBuilder.addDynamic("snakeCase", snakeCase);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        snakeCase: FunctionType
    }
}

export default snakeCase;
