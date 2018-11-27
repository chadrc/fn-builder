import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import sortedIndexBy from "../sortedIndexBy";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const sortedIndexBy = fn.sortedIndexBy();

    const input = ['a', 'b', 'c', 'd'];
    const output = sortedIndexBy(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("sortedIndexBy", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            sortedIndexBy: sortedIndexBy
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
