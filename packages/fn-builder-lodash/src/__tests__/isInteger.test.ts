import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import isInteger from "../isInteger";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const isInteger = fn.isInteger();

    const input = ['a', 'b', 'c', 'd'];
    const output = isInteger(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("isInteger", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            isInteger: isInteger
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
