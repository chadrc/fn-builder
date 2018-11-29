import {addDynamic} from "fn-builder";
import concat from "./functions/concat";

addDynamic("concat", concat);

export default concat;
