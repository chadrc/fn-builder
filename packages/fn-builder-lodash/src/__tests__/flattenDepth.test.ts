import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import flattenDepth from "../flattenDepth";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const flattenDepth = fn.flattenDepth();

    const input = ['a', 'b', 'c', 'd'];
    const output = flattenDepth(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("flattenDepth", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            flattenDepth: flattenDepth
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
