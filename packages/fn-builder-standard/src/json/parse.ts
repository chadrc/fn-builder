import {addDynamic} from "fn-builder";
import parse, {FunctionType} from "./functions/parse";

addDynamic("parse", parse);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        parse: FunctionType
    }
}

export default parse;
