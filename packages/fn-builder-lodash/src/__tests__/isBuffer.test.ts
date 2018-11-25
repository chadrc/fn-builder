import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import isBuffer from "../isBuffer";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const isBuffer = fn.isBuffer();

    const input = ['a', 'b', 'c', 'd'];
    const output = isBuffer(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("isBuffer", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            isBuffer: isBuffer
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
