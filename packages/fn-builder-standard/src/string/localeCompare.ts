import {addDynamic} from "fn-builder";
import localeCompare from "./functions/localeCompare";

addDynamic("localeCompare", localeCompare);

export default localeCompare;
