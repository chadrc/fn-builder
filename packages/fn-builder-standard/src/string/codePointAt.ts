import codePointAt from "./functions/codePointAt";
import {addDynamic} from "fn-builder";

addDynamic("codePointAt", codePointAt);

export default codePointAt;