import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import isSafeInteger from "../isSafeInteger";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const isSafeInteger = fn.isSafeInteger();

    const input = ['a', 'b', 'c', 'd'];
    const output = isSafeInteger(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("isSafeInteger", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            isSafeInteger: isSafeInteger
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
