import concat = require("lodash/concat");

export default (...values: any[]) => (ary: any[]) => concat(ary, ...values);