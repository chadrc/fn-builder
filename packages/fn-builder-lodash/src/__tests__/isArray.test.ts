import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import isArray from "../isArray";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const isArray = fn.isArray();

    const input = ['a', 'b', 'c', 'd'];
    const output = isArray(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("isArray", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            isArray: isArray
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
