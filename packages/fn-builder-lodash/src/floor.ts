import * as FnBuilder from "fn-builder";
import floor, {FunctionType} from "./functions/floor";

FnBuilder.addDynamic("floor", floor);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        floor: FunctionType
    }
}

export default floor;
