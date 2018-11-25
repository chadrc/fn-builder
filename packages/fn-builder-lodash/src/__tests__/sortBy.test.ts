import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import sortBy from "../sortBy";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const sortBy = fn.sortBy();

    const input = ['a', 'b', 'c', 'd'];
    const output = sortBy(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("sortBy", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            sortBy: sortBy
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
