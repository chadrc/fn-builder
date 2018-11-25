import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import sortedLastIndex from "../sortedLastIndex";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const sortedLastIndex = fn.sortedLastIndex();

    const input = ['a', 'b', 'c', 'd'];
    const output = sortedLastIndex(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("sortedLastIndex", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            sortedLastIndex: sortedLastIndex
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
