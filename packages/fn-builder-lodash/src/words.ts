import * as FnBuilder from "fn-builder";
import words, {FunctionType} from "./functions/words";

FnBuilder.addDynamic("words", words);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        words: FunctionType
    }
}

export default words;
