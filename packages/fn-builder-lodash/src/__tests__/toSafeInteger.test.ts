import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import toSafeInteger from "../toSafeInteger";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const toSafeInteger = fn.toSafeInteger();

    const input = ['a', 'b', 'c', 'd'];
    const output = toSafeInteger(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("toSafeInteger", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            toSafeInteger: toSafeInteger
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
