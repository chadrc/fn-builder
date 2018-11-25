import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import flip from "../flip";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const flip = fn.flip();

    const input = ['a', 'b', 'c', 'd'];
    const output = flip(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("flip", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            flip: flip
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
