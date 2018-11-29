import {addDynamic} from "fn-builder";
import endsWith from "./functions/endsWith";

addDynamic("endsWith", endsWith);

export default endsWith;
