import chunk = require("lodash/chunk");

export default (size: number) => (ary: any[]) => chunk(ary, size);