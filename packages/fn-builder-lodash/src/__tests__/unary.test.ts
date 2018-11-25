import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import unary from "../unary";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const unary = fn.unary();

    const input = ['a', 'b', 'c', 'd'];
    const output = unary(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("unary", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            unary: unary
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
