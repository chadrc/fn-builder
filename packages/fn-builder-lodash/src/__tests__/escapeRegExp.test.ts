import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import escapeRegExp from "../escapeRegExp";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const escapeRegExp = fn.escapeRegExp();

    const input = ['a', 'b', 'c', 'd'];
    const output = escapeRegExp(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("escapeRegExp", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            escapeRegExp: escapeRegExp
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
