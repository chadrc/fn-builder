import * as FnBuilder from "fn-builder";
import orderBy, {FunctionType} from "./functions/orderBy";

FnBuilder.addDynamic("orderBy", orderBy);

declare module "fn-builder/DynamicFn" {
    interface DynamicFn {
        orderBy: FunctionType
    }
}

export default orderBy;
