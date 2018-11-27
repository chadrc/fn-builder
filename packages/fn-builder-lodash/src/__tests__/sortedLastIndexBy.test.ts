import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import sortedLastIndexBy from "../sortedLastIndexBy";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const sortedLastIndexBy = fn.sortedLastIndexBy();

    const input = ['a', 'b', 'c', 'd'];
    const output = sortedLastIndexBy(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("sortedLastIndexBy", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            sortedLastIndexBy: sortedLastIndexBy
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
