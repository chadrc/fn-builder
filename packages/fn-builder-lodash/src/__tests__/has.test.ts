import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import has from "../has";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const has = fn.has();

    const input = ['a', 'b', 'c', 'd'];
    const output = has(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("has", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            has: has
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
