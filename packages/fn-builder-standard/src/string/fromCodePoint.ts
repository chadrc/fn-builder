import fromCodePoint from "./functions/fromCodePoint";
import {addDynamic} from "fn-builder";

addDynamic("fromCodePoint", fromCodePoint);

export default fromCodePoint