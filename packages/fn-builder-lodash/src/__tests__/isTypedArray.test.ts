import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import isTypedArray from "../isTypedArray";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const isTypedArray = fn.isTypedArray();

    const input = ['a', 'b', 'c', 'd'];
    const output = isTypedArray(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("isTypedArray", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            isTypedArray: isTypedArray
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
