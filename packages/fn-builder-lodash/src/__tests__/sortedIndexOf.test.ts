import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import sortedIndexOf from "../sortedIndexOf";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const sortedIndexOf = fn.sortedIndexOf();

    const input = ['a', 'b', 'c', 'd'];
    const output = sortedIndexOf(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("sortedIndexOf", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            sortedIndexOf: sortedIndexOf
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});