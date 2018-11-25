import * as FnBuilder from "fn-builder";
import random, {FunctionType} from "./functions/random";

FnBuilder.addDynamic("random", random);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        random: FunctionType
    }
}

export default random;
