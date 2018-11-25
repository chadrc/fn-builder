import * as FnBuilder from "fn-builder";
import spread, {FunctionType} from "./functions/spread";

FnBuilder.addDynamic("spread", spread);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        spread: FunctionType
    }
}

export default spread;
