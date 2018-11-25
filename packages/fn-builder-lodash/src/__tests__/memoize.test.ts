import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import memoize from "../memoize";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const memoize = fn.memoize();

    const input = ['a', 'b', 'c', 'd'];
    const output = memoize(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("memoize", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            memoize: memoize
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
