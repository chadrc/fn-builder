import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import subtract from "../subtract";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const subtract = fn.subtract();

    const input = ['a', 'b', 'c', 'd'];
    const output = subtract(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("subtract", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            subtract: subtract
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
