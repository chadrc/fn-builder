import * as FnBuilder from "fn-builder";
import template, {FunctionType} from "./functions/template";

FnBuilder.addDynamic("template", template);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        template: FunctionType
    }
}

export default template;
