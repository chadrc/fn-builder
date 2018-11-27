import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import toString from "../toString";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const toString = fn.toString();

    const input = ['a', 'b', 'c', 'd'];
    const output = toString(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("toString", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            toString: toString
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
