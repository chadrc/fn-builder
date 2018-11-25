import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import unescape from "../unescape";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const unescape = fn.unescape();

    const input = ['a', 'b', 'c', 'd'];
    const output = unescape(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("unescape", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            unescape: unescape
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
