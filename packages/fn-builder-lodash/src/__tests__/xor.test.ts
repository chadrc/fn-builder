import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import xor from "../xor";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const xor = fn.xor();

    const input = ['a', 'b', 'c', 'd'];
    const output = xor(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("xor", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            xor: xor
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
