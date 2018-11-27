import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import xorWith from "../xorWith";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const xorWith = fn.xorWith();

    const input = ['a', 'b', 'c', 'd'];
    const output = xorWith(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("xorWith", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            xorWith: xorWith
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
