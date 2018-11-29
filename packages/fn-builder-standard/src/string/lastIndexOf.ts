import {addDynamic} from "fn-builder";
import lastIndexOf from "./functions/lastIndexOf";

addDynamic("lastIndexOf", lastIndexOf);

export default lastIndexOf;
