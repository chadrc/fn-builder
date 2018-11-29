import {addDynamic} from "fn-builder";
import indexOf from "./functions/indexOf";

addDynamic("indexOf", indexOf);

export default indexOf;
