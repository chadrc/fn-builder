import {addDynamic} from "fn-builder";
import includes from "./functions/includes";

addDynamic("includes", includes);

export default includes;
