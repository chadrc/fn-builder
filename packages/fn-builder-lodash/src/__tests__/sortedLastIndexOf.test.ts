import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import sortedLastIndexOf from "../sortedLastIndexOf";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const sortedLastIndexOf = fn.sortedLastIndexOf();

    const input = ['a', 'b', 'c', 'd'];
    const output = sortedLastIndexOf(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("sortedLastIndexOf", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            sortedLastIndexOf: sortedLastIndexOf
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
