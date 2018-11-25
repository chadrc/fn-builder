import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import sortedIndex from "../sortedIndex";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const sortedIndex = fn.sortedIndex();

    const input = ['a', 'b', 'c', 'd'];
    const output = sortedIndex(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("sortedIndex", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            sortedIndex: sortedIndex
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
