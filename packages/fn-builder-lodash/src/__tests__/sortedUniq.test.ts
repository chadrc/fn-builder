import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import sortedUniq from "../sortedUniq";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const sortedUniq = fn.sortedUniq();

    const input = ['a', 'b', 'c', 'd'];
    const output = sortedUniq(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("sortedUniq", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            sortedUniq: sortedUniq
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
