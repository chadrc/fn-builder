import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import isNative from "../isNative";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const isNative = fn.isNative();

    const input = ['a', 'b', 'c', 'd'];
    const output = isNative(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("isNative", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            isNative: isNative
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
