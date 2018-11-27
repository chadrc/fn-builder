import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import constant from "../constant";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const constant = fn.constant();

    const input = ['a', 'b', 'c', 'd'];
    const output = constant(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("constant", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            constant: constant
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
