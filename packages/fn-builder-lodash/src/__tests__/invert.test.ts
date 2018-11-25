import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import invert from "../invert";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const invert = fn.invert();

    const input = ['a', 'b', 'c', 'd'];
    const output = invert(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("invert", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            invert: invert
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});