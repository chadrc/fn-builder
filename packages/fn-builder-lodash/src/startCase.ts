import * as FnBuilder from "fn-builder";
import startCase, {FunctionType} from "./functions/startCase";

FnBuilder.addDynamic("startCase", startCase);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        startCase: FunctionType
    }
}

export default startCase;
