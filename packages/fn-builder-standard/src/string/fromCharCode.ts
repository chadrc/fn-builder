import fromCharCode from "./functions/fromCharCode";
import {addDynamic} from "fn-builder";

addDynamic("fromCharCode", fromCharCode);

export default fromCharCode