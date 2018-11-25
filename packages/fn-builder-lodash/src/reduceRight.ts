import * as FnBuilder from "fn-builder";
import reduceRight, {FunctionType} from "./functions/reduceRight";

FnBuilder.addDynamic("reduceRight", reduceRight);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        reduceRight: FunctionType
    }
}

export default reduceRight;
