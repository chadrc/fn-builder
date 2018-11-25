import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import clamp from "../clamp";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const clamp = fn.clamp();

    const input = ['a', 'b', 'c', 'd'];
    const output = clamp(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("clamp", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            clamp: clamp
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
