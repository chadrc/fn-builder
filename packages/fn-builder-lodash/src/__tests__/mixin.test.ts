import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import mixin from "../mixin";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const mixin = fn.mixin();

    const input = ['a', 'b', 'c', 'd'];
    const output = mixin(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("mixin", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            mixin: mixin
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
