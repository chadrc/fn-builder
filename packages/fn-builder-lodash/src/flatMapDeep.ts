import * as FnBuilder from "fn-builder";
import flatMapDeep, {FunctionType} from "./functions/flatMapDeep";

FnBuilder.addDynamic("flatMapDeep", flatMapDeep);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        flatMapDeep: FunctionType
    }
}

export default flatMapDeep;
