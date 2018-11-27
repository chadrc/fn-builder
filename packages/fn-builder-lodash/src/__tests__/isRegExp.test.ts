import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import isRegExp from "../isRegExp";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const isRegExp = fn.isRegExp();

    const input = ['a', 'b', 'c', 'd'];
    const output = isRegExp(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("isRegExp", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            isRegExp: isRegExp
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
