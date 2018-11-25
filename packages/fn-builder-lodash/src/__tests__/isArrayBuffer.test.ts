import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import isArrayBuffer from "../isArrayBuffer";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const isArrayBuffer = fn.isArrayBuffer();

    const input = ['a', 'b', 'c', 'd'];
    const output = isArrayBuffer(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("isArrayBuffer", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            isArrayBuffer: isArrayBuffer
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
